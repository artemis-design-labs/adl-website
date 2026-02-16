import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

// Only allow in development
const isDev = process.env.NODE_ENV === 'development';

interface SaveConfigRequest {
  sectionVersions: Record<string, 'v1' | 'v2'>;
  colorPalette: 'default' | 'ocean' | 'terracotta';
}

export async function POST(request: NextRequest) {
  if (!isDev) {
    return NextResponse.json(
      { error: 'This endpoint is only available in development mode' },
      { status: 403 }
    );
  }

  try {
    const body: SaveConfigRequest = await request.json();
    const { sectionVersions, colorPalette } = body;

    // Get the project root directory
    const projectRoot = process.cwd();
    const contextFilePath = path.join(projectRoot, 'src/context/ContentVersionContext.tsx');

    // Read the current file
    let fileContent = await fs.readFile(contextFilePath, 'utf-8');

    // Update the defaultVersions object
    const defaultVersionsRegex = /const defaultVersions: SectionVersions = \{[\s\S]*?\};/;
    const newDefaultVersions = generateDefaultVersionsCode(sectionVersions);
    fileContent = fileContent.replace(defaultVersionsRegex, newDefaultVersions);

    // Update the default colorPalette state
    const colorPaletteRegex = /useState<ColorPalette>\(['"](\w+)['"]\)/;
    fileContent = fileContent.replace(colorPaletteRegex, `useState<ColorPalette>('${colorPalette}')`);

    // Write the updated file
    await fs.writeFile(contextFilePath, fileContent, 'utf-8');

    // Git operations - commit and push to test-content-1
    const gitCommands = [
      'git add src/context/ContentVersionContext.tsx',
      `git commit -m "Update content config: palette=${colorPalette}, versions updated via ContentSwitcher\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"`,
      'git push origin main',
      'git checkout test-content-1',
      'git merge main --no-edit',
      'git push origin test-content-1',
      'git checkout main'
    ];

    for (const cmd of gitCommands) {
      try {
        await execAsync(cmd, { cwd: projectRoot });
      } catch (error: unknown) {
        const execError = error as { stderr?: string; message?: string };
        // If commit fails because nothing to commit, continue
        if (execError.stderr?.includes('nothing to commit') || execError.message?.includes('nothing to commit')) {
          continue;
        }
        throw error;
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Configuration saved and pushed to test-content-1',
      config: { sectionVersions, colorPalette }
    });

  } catch (error: unknown) {
    console.error('Error saving config:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to save configuration', details: errorMessage },
      { status: 500 }
    );
  }
}

function generateDefaultVersionsCode(versions: Record<string, 'v1' | 'v2'>): string {
  const lines = [
    'const defaultVersions: SectionVersions = {',
    '  // Home',
    `  'home-hero': '${versions['home-hero'] || 'v1'}',`,
    `  'home-problem': '${versions['home-problem'] || 'v1'}',`,
    `  'home-howItWorks': '${versions['home-howItWorks'] || 'v1'}',`,
    `  'home-ourAiPreview': '${versions['home-ourAiPreview'] || 'v1'}',`,
    `  'home-socialProof': '${versions['home-socialProof'] || 'v1'}',`,
    `  'home-cta': '${versions['home-cta'] || 'v1'}',`,
    '  // About',
    `  'about-hero': '${versions['about-hero'] || 'v1'}',`,
    `  'about-originStory': '${versions['about-originStory'] || 'v1'}',`,
    `  'about-team': '${versions['about-team'] || 'v1'}',`,
    `  'about-values': '${versions['about-values'] || 'v1'}',`,
    `  'about-cta': '${versions['about-cta'] || 'v1'}',`,
    '  // Services',
    `  'services-hero': '${versions['services-hero'] || 'v1'}',`,
    `  'services-creation': '${versions['services-creation'] || 'v1'}',`,
    `  'services-maintenance': '${versions['services-maintenance'] || 'v1'}',`,
    `  'services-handoff': '${versions['services-handoff'] || 'v1'}',`,
    `  'services-cta': '${versions['services-cta'] || 'v1'}',`,
    '  // Our AI',
    `  'ourAi-hero': '${versions['ourAi-hero'] || 'v1'}',`,
    `  'ourAi-humanVsAi': '${versions['ourAi-humanVsAi'] || 'v1'}',`,
    `  'ourAi-technology': '${versions['ourAi-technology'] || 'v1'}',`,
    `  'ourAi-comparison': '${versions['ourAi-comparison'] || 'v1'}',`,
    `  'ourAi-cta': '${versions['ourAi-cta'] || 'v1'}',`,
    '  // Work',
    `  'work-hero': '${versions['work-hero'] || 'v1'}',`,
    `  'work-metrics': '${versions['work-metrics'] || 'v1'}',`,
    `  'work-caseStudies': '${versions['work-caseStudies'] || 'v1'}',`,
    `  'work-cta': '${versions['work-cta'] || 'v1'}',`,
    '  // Pricing',
    `  'pricing-hero': '${versions['pricing-hero'] || 'v1'}',`,
    `  'pricing-tiers': '${versions['pricing-tiers'] || 'v1'}',`,
    `  'pricing-comparison': '${versions['pricing-comparison'] || 'v1'}',`,
    `  'pricing-faq': '${versions['pricing-faq'] || 'v1'}',`,
    `  'pricing-cta': '${versions['pricing-cta'] || 'v1'}',`,
    '  // Contact',
    `  'contact-hero': '${versions['contact-hero'] || 'v1'}',`,
    `  'contact-booking': '${versions['contact-booking'] || 'v1'}',`,
    `  'contact-audit': '${versions['contact-audit'] || 'v1'}',`,
    `  'contact-waitlist': '${versions['contact-waitlist'] || 'v1'}',`,
    '};'
  ];

  return lines.join('\n');
}
