import {
  OnboardingFormData,
  WEBSITE_CATEGORIES,
  PAGE_ESTIMATES,
  FEATURES,
  ASSET_ITEMS,
  TIMELINE_OPTIONS,
} from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// Helper Formatters
// ─────────────────────────────────────────────────────────────────────────────

function getCategoryLabel(data: OnboardingFormData): string {
  if (data.websiteCategory === "other") {
    return data.websiteCategoryCustom ? `Custom: ${data.websiteCategoryCustom}` : "Custom Scope";
  }
  const found = WEBSITE_CATEGORIES.find((c) => c.value === data.websiteCategory);
  return found ? found.label : data.websiteCategory || "Not specified";
}

function getPagesLabel(data: OnboardingFormData): string {
  if (data.estimatedPages === "custom") {
    return data.estimatedPagesCustom ? `Custom: ${data.estimatedPagesCustom}` : "Custom Pages";
  }
  const found = PAGE_ESTIMATES.find((p) => p.value === data.estimatedPages);
  return found ? `${found.label} (${found.sublabel})` : data.estimatedPages || "Not specified";
}

function getTimelineLabel(data: OnboardingFormData): string {
  if (data.launchTimeline === "custom") {
    return data.launchTimelineCustom ? `Specific Deadline: ${data.launchTimelineCustom}` : "Custom Target";
  }
  const found = TIMELINE_OPTIONS.find((t) => t.value === data.launchTimeline);
  return found ? `${found.label} (${found.sublabel})` : data.launchTimeline || "Not specified";
}

function getFeaturesList(data: OnboardingFormData): string[] {
  const list: string[] = FEATURES.filter((f) => data.features.includes(f.id)).map(
    (f) => f.label as string
  );
  if (data.features.includes("custom") && data.customFeaturesText) {
    list.push(`Custom: ${data.customFeaturesText}`);
  }
  return list;
}

const DEFAULT_APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://sriram-shiftwave.github.io/client-onboarding";

// ─────────────────────────────────────────────────────────────────────────────
// 1. ADMIN NOTIFICATION EMAIL (Received by Designer / Agency)
// ─────────────────────────────────────────────────────────────────────────────

export function generateAdminEmailHtml(
  data: OnboardingFormData,
  appUrl: string = DEFAULT_APP_URL
): string {
  const categoryLabel = getCategoryLabel(data);
  const pagesLabel = getPagesLabel(data);
  const timelineLabel = getTimelineLabel(data);
  const features = getFeaturesList(data);

  const cleanPhone = data.phone.replace(/[^0-9+]/g, "");
  const waUrl = `https://wa.me/${cleanPhone.replace("+", "")}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Onboarding - ${data.companyName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f5f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c1917; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f6f5f4; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; border: 1px solid #e7e5e4; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #ea580c; padding: 28px 32px; color: #ffffff;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #fed7aa; margin-bottom: 6px;">
                      ✦ New Project Intake Form
                    </div>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 700; line-height: 1.3; color: #ffffff;">
                      ${data.companyName}
                    </h1>
                    <div style="font-size: 13px; color: #ffedd5; margin-top: 4px;">
                      Submitted by ${data.fullName}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Actions Bar -->
          <tr>
            <td style="background-color: #fff7ed; padding: 14px 32px; border-bottom: 1px solid #fed7aa;">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right: 12px;">
                    <a href="mailto:${data.email}?subject=Regarding%20your%20website%20quote%20for%20${encodeURIComponent(data.companyName)}" style="display: inline-block; padding: 7px 14px; background-color: #ea580c; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600;">
                      ✉ Reply via Email
                    </a>
                  </td>
                  <td>
                    <a href="${waUrl}" style="display: inline-block; padding: 7px 14px; background-color: #ffffff; color: #1c1917; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; border: 1px solid #e7e5e4;">
                      💬 Chat on WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px;">

              <!-- Contact Card -->
              <div style="margin-bottom: 28px;">
                <h2 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #78716c; font-weight: 600;">
                  1. Client Contact Details
                </h2>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #fafaf9; border-radius: 10px; border: 1px solid #f5f5f4; padding: 16px;">
                  <tr>
                    <td style="padding: 4px 8px; font-size: 13px; color: #78716c; width: 35%;">Client Name:</td>
                    <td style="padding: 4px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${data.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 8px; font-size: 13px; color: #78716c;">Company / Brand:</td>
                    <td style="padding: 4px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${data.companyName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 8px; font-size: 13px; color: #78716c;">Email:</td>
                    <td style="padding: 4px 8px; font-size: 13px; font-weight: 600; color: #ea580c;">
                      <a href="mailto:${data.email}" style="color: #ea580c; text-decoration: none;">${data.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 8px; font-size: 13px; color: #78716c;">Phone / WhatsApp:</td>
                    <td style="padding: 4px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">
                      <a href="tel:${data.phone}" style="color: #1c1917; text-decoration: none;">${data.phone}</a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Business Overview Callout -->
              <div style="margin-bottom: 28px;">
                <h2 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #78716c; font-weight: 600;">
                  2. Business Overview & Website Goals
                </h2>
                <div style="background-color: #fafaf9; border-left: 3px solid #ea580c; border-radius: 0 10px 10px 0; padding: 16px; font-size: 13px; line-height: 1.6; color: #292524; white-space: pre-line;">
${data.businessOverview}
                </div>
              </div>

              <!-- Scope & Deliverables -->
              <div style="margin-bottom: 28px;">
                <h2 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #78716c; font-weight: 600;">
                  3. Project Scope & Specifications
                </h2>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #fafaf9; border-radius: 10px; border: 1px solid #f5f5f4; padding: 16px;">
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c; width: 35%;">Website Category:</td>
                    <td style="padding: 6px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${categoryLabel}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c;">Estimated Pages:</td>
                    <td style="padding: 6px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${pagesLabel}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c; vertical-align: top;">Key Features:</td>
                    <td style="padding: 6px 8px; font-size: 13px; color: #1c1917;">
                      ${features.length > 0 ? features.map((f) => `<div style="margin-bottom: 4px;">✓ ${f}</div>`).join("") : "<em>None selected</em>"}
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Asset Readiness Matrix -->
              <div style="margin-bottom: 28px;">
                <h2 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #78716c; font-weight: 600;">
                  4. Asset Readiness Matrix
                </h2>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #e7e5e4; border-radius: 10px; overflow: hidden; font-size: 12px;">
                  <tr style="background-color: #f5f5f4; font-weight: 600; color: #57534e;">
                    <th align="left" style="padding: 8px 12px; border-bottom: 1px solid #e7e5e4;">Asset Item</th>
                    <th align="left" style="padding: 8px 12px; border-bottom: 1px solid #e7e5e4;">Status</th>
                  </tr>
                  ${ASSET_ITEMS.map((item) => {
                    const status = data[item.id] === "have" ? "READY (Client has it)" : "NEEDED (Designer to provide)";
                    const color = data[item.id] === "have" ? "#15803d" : "#ea580c";
                    return `
                    <tr>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #f5f5f4; color: #1c1917;">${item.label}</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #f5f5f4; font-weight: 600; color: ${color};">${status}</td>
                    </tr>`;
                  }).join("")}
                </table>
                ${data.assetNotes ? `
                  <div style="margin-top: 8px; font-size: 12px; color: #78716c; font-style: italic;">
                    <strong>Notes:</strong> ${data.assetNotes}
                  </div>` : ""}
              </div>

              <!-- References & Timeline -->
              <div style="margin-bottom: 28px;">
                <h2 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #78716c; font-weight: 600;">
                  5. References & Target Launch
                </h2>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #fafaf9; border-radius: 10px; border: 1px solid #f5f5f4; padding: 16px;">
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c; width: 35%;">Launch Timeline:</td>
                    <td style="padding: 6px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${timelineLabel}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c; vertical-align: top;">Reference Links:</td>
                    <td style="padding: 6px 8px; font-size: 13px; color: #1c1917; white-space: pre-line;">${data.referenceUrls || "<em>None provided</em>"}</td>
                  </tr>
                </table>
              </div>

              <!-- Legal Agreements -->
              <div style="background-color: #f5f5f4; border-radius: 10px; padding: 14px 16px; font-size: 12px; color: #57534e;">
                <div style="margin-bottom: 4px;">✓ <strong>Milestones & 2 Revision Rounds:</strong> Acknowledged & Agreed</div>
                <div>✓ <strong>3rd-Party Costs & Liability Cap:</strong> Acknowledged & Agreed</div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #fafaf9; padding: 20px 32px; border-top: 1px solid #e7e5e4; text-align: center; font-size: 12px; color: #a8a29e;">
              Sent automatically via <a href="${appUrl}" style="color: #78716c; text-decoration: underline;">Client Onboarding & Project Scope</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. CLIENT THANK-YOU EMAIL (Sent to the Client)
// ─────────────────────────────────────────────────────────────────────────────

export function generateClientThankYouHtml(
  data: OnboardingFormData,
  appUrl: string = DEFAULT_APP_URL
): string {
  const firstName = data.fullName.split(" ")[0] || data.fullName;
  const categoryLabel = getCategoryLabel(data);
  const timelineLabel = getTimelineLabel(data);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Intake Confirmation - ${data.companyName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #fafaf9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c1917; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #fafaf9; padding: 36px 16px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #ffffff; border-radius: 16px; border: 1px solid #e7e5e4; overflow: hidden; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);">
          
          <!-- Brand Accent Bar -->
          <tr>
            <td style="height: 6px; background-color: #ea580c;"></td>
          </tr>

          <!-- Hero Greeting -->
          <tr>
            <td style="padding: 40px 36px 24px 36px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="display: inline-block; padding: 4px 10px; background-color: #ffedd5; color: #c2410c; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 16px;">
                      ✦ Intake Received
                    </div>
                    <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #1c1917; line-height: 1.25;">
                      Thank you, ${firstName}.
                    </h1>
                    <p style="margin: 0; font-size: 15px; color: #57534e; line-height: 1.6;">
                      We've safely received the project requirements for <strong style="color: #1c1917;">${data.companyName}</strong>. We're excited to dive into your vision and prepare a tailored design and development proposal.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Submission Snapshot Card -->
          <tr>
            <td style="padding: 0 36px 28px 36px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #fafaf9; border-radius: 12px; border: 1px solid #f5f5f4; padding: 20px;">
                <tr>
                  <td colspan="2" style="padding-bottom: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #a8a29e;">
                    Your Project Snapshot
                  </td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 13px; color: #78716c; width: 40%;">Project:</td>
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${data.companyName}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 13px; color: #78716c;">Website Type:</td>
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${categoryLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 13px; color: #78716c;">Estimated Timeline:</td>
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${timelineLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 13px; color: #78716c;">Contact Email:</td>
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${data.email}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Next Steps Roadmap -->
          <tr>
            <td style="padding: 0 36px 32px 36px;">
              <h2 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #1c1917;">
                What Happens Next?
              </h2>

              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <!-- Step 1 -->
                <tr>
                  <td style="width: 32px; vertical-align: top; padding-right: 14px;">
                    <div style="width: 26px; height: 26px; border-radius: 50%; background-color: #ea580c; color: #ffffff; font-size: 12px; font-weight: 700; text-align: center; line-height: 26px;">
                      1
                    </div>
                  </td>
                  <td style="vertical-align: top; padding-bottom: 18px;">
                    <div style="font-size: 14px; font-weight: 600; color: #1c1917; margin-bottom: 2px;">
                      Scope & Requirements Analysis
                    </div>
                    <div style="font-size: 13px; color: #57534e; line-height: 1.5;">
                      Over the next 24 hours, we'll review your business goals, site structure, and integration requirements to assess the optimal approach.
                    </div>
                  </td>
                </tr>

                <!-- Step 2 -->
                <tr>
                  <td style="width: 32px; vertical-align: top; padding-right: 14px;">
                    <div style="width: 26px; height: 26px; border-radius: 50%; background-color: #ea580c; color: #ffffff; font-size: 12px; font-weight: 700; text-align: center; line-height: 26px;">
                      2
                    </div>
                  </td>
                  <td style="vertical-align: top; padding-bottom: 18px;">
                    <div style="font-size: 14px; font-weight: 600; color: #1c1917; margin-bottom: 2px;">
                      Tailored Proposal & Fixed Quote
                    </div>
                    <div style="font-size: 13px; color: #57534e; line-height: 1.5;">
                      Within 24–48 hours, you'll receive a transparent, itemized proposal outlining exact deliverables, milestones, and timeline.
                    </div>
                  </td>
                </tr>

                <!-- Step 3 -->
                <tr>
                  <td style="width: 32px; vertical-align: top; padding-right: 14px;">
                    <div style="width: 26px; height: 26px; border-radius: 50%; background-color: #ea580c; color: #ffffff; font-size: 12px; font-weight: 700; text-align: center; line-height: 26px;">
                      3
                    </div>
                  </td>
                  <td style="vertical-align: top;">
                    <div style="font-size: 14px; font-weight: 600; color: #1c1917; margin-bottom: 2px;">
                      Optional 20-Minute Kickoff Chat
                    </div>
                    <div style="font-size: 13px; color: #57534e; line-height: 1.5;">
                      If the proposal aligns with your budget and expectations, we'll schedule a quick call to answer questions and finalize the 50% start milestone.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact / Questions Callout -->
          <tr>
            <td style="padding: 0 36px 36px 36px;">
              <div style="background-color: #fff7ed; border: 1px solid #fed7aa; border-radius: 12px; padding: 18px 20px; text-align: center;">
                <div style="font-size: 13px; font-weight: 600; color: #9a3412; margin-bottom: 4px;">
                  Have questions or need to make immediate changes?
                </div>
                <div style="font-size: 12px; color: #7c2d12; line-height: 1.5;">
                  Simply reply directly to this email or reach out on WhatsApp at <strong style="color: #9a3412;">${data.phone}</strong>.
                </div>
              </div>
            </td>
          </tr>

          <!-- Sign-off & Footer -->
          <tr>
            <td style="background-color: #fafaf9; padding: 24px 36px; border-top: 1px solid #e7e5e4; text-align: center; font-size: 12px; color: #a8a29e; line-height: 1.6;">
              <p style="margin: 0 0 4px 0; font-weight: 600; color: #57534e;">
                Bespoke Web Design & Development Services
              </p>
              <p style="margin: 0;">
                All project requirements and discussions are strictly confidential.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. PLAIN-TEXT FALLBACKS
// ─────────────────────────────────────────────────────────────────────────────

export function generateAdminEmailPlainText(
  data: OnboardingFormData,
  appUrl: string = DEFAULT_APP_URL
): string {
  const categoryLabel = getCategoryLabel(data);
  const pagesLabel = getPagesLabel(data);
  const timelineLabel = getTimelineLabel(data);
  const features = getFeaturesList(data);

  const assetSummary = ASSET_ITEMS.map((item) => {
    const status =
      data[item.id] === "have" ? "READY (Client has it)" : "NEEDED (Designer to provide)";
    return `  • ${item.label}: ${status}`;
  }).join("\n");

  return `
NEW CLIENT WEBSITE ONBOARDING & QUOTE REQUEST
======================================================
Company / Brand: ${data.companyName}
Client Name:     ${data.fullName}
Email:           ${data.email}
Phone/WhatsApp:  ${data.phone}

1. BUSINESS OVERVIEW & GOALS
------------------------------------------------------
${data.businessOverview}

2. PROJECT SCOPE & DELIVERABLES
------------------------------------------------------
• Category:        ${categoryLabel}
• Estimated Pages: ${pagesLabel}
• Key Features:
${features.length > 0 ? features.map((f) => `  ✓ ${f}`).join("\n") : "  (None selected)"}

3. ASSET READINESS MATRIX
------------------------------------------------------
${assetSummary}
${data.assetNotes ? `• Notes: ${data.assetNotes}` : ""}

4. REFERENCES & TIMELINE
------------------------------------------------------
• Target Timeline: ${timelineLabel}
• References:
${data.referenceUrls || "  (None provided)"}

5. TERMS & AGREEMENTS
------------------------------------------------------
✓ 2 Rounds of Revisions & 50% Milestone Advance: Accepted
✓ Third-Party Costs & Liability Cap: Accepted

======================================================
View Intake Portal: ${appUrl}
Sent via Client Onboarding & Project Scope System
  `.trim();
}

export function generateClientThankYouPlainText(
  data: OnboardingFormData,
  appUrl: string = DEFAULT_APP_URL
): string {
  const firstName = data.fullName.split(" ")[0] || data.fullName;
  const categoryLabel = getCategoryLabel(data);
  const timelineLabel = getTimelineLabel(data);

  return `
Hi ${firstName},

Thank you for completing the website onboarding for ${data.companyName}!

We've safely received your project specifications and are already reviewing your vision.

YOUR PROJECT SNAPSHOT:
------------------------------------------------------
• Company / Brand:   ${data.companyName}
• Website Category:  ${categoryLabel}
• Target Timeline:   ${timelineLabel}
• Contact Email:     ${data.email}

WHAT HAPPENS NEXT:
------------------------------------------------------
1. SCOPE & REQUIREMENTS ANALYSIS (Next 24 Hours)
   We will review your business goals, site structure, and feature requirements to determine the optimal tech stack and scope.

2. TAILORED PROPOSAL & FIXED QUOTE (Within 24-48 Hours)
   You'll receive a clear, itemized proposal outlining exact deliverables, milestones, and timeline.

3. OPTIONAL KICKOFF CHAT
   If everything aligns, we'll schedule a brief 20-minute kickoff chat to answer questions and formalize the 50% advance milestone.

Need to update anything or have questions? Simply reply to this email or reach us on WhatsApp.

Warm regards,
Web Design & Development Studio
${appUrl}
  `.trim();
}

