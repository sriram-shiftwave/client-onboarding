(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4828,54053,e=>{let t=[{value:"landing-page",label:"Single-Page Landing Page",description:"Focused page designed for high-converting lead generation or product launches"},{value:"multi-page-business",label:"Multi-Page Business Website",description:"Comprehensive corporate presence with company info, services, and team details"},{value:"ecommerce",label:"E-Commerce Store",description:"Online catalog, shopping cart, and secure customer checkout"},{value:"custom-web-app",label:"Custom Web App / Portal",description:"Interactive dashboard, member portal, or specialized application workflow"},{value:"redesign",label:"Website Redesign",description:"Modernizing and upgrading an existing site's design, speed, and user experience"},{value:"other",label:"None of the above / Custom Scope",description:"A unique website concept or custom requirement not covered by the standard options"}],o=[{value:"1",label:"1 Page",sublabel:"Single landing page"},{value:"3-5",label:"3–5 Pages",sublabel:"Essential company website"},{value:"6-10",label:"6–10 Pages",sublabel:"Full multi-section website"},{value:"10+",label:"10+ Pages",sublabel:"Extensive site or portal"},{value:"custom",label:"None of the above",sublabel:"Describe your custom scope"}],r=[{id:"contact-form",label:"Contact & Lead Capture Form",description:"Collect validated enquiries and route notifications to your inbox"},{id:"whatsapp",label:"WhatsApp Live Chat Integration",description:"One-click chat button to let visitors message directly on WhatsApp"},{id:"payment",label:"Online Payment Gateway",description:"Accept credit cards, debit cards, Apple Pay, Stripe, or local gateways"},{id:"booking",label:"Appointment / Booking Calendar",description:"Automated self-service appointment scheduling with calendar synchronization"},{id:"cms",label:"Content Management System (CMS)",description:"Admin panel to update blog posts, services, or text without a developer"},{id:"seo",label:"SEO Foundations & Google Maps",description:"Meta tags, schema markup, Google Maps embed, and search indexing"},{id:"custom",label:"None of the above / Custom Features",description:"Specify any custom API integrations, user accounts, or proprietary tools"}],i=[{id:"brandLogo",label:"Brand Logo & Visual Identity",description:"Vector logo files, brand style guide, color palette, and typography",haveLabel:"I have it ready",needLabel:"I need you to create / provide it"},{id:"websiteCopy",label:"Website Text & Copywriting",description:"Headlines, service descriptions, about us text, and call-to-actions",haveLabel:"I will provide the copy",needLabel:"I need copywriting services"},{id:"photos",label:"Product & Business Photography",description:"High-resolution photos of your products, premises, team, or services",haveLabel:"I have high-res photos ready",needLabel:"Need curated stock / AI visuals"},{id:"domainName",label:"Domain Name (e.g., yourbrand.com)",description:"The web address visitors type to access your website",haveLabel:"I already own the domain",needLabel:"I need assistance acquiring one"},{id:"webHosting",label:"Web Hosting Infrastructure",description:"The server or cloud platform where your website runs",haveLabel:"I have hosting setup",needLabel:"I need you to configure hosting"}],n=[{value:"urgent",label:"Urgent",sublabel:"< 1 Week",description:"High-priority expedited turnaround"},{value:"standard",label:"Standard",sublabel:"2–3 Weeks",description:"Optimal balance of design exploration & delivery"},{value:"flexible",label:"Flexible",sublabel:"1 Month+",description:"Open timeline with phased rollouts"},{value:"custom",label:"None of the above",sublabel:"Specific Deadline",description:"Fixed event launch or custom schedule"}];function a(e){if("other"===e.websiteCategory)return e.websiteCategoryCustom?`Custom: ${e.websiteCategoryCustom}`:"Custom Scope";let o=t.find(t=>t.value===e.websiteCategory);return o?o.label:e.websiteCategory||"Not specified"}function l(e){if("custom"===e.estimatedPages)return e.estimatedPagesCustom?`Custom: ${e.estimatedPagesCustom}`:"Custom Pages";let t=o.find(t=>t.value===e.estimatedPages);return t?`${t.label} (${t.sublabel})`:e.estimatedPages||"Not specified"}function s(e){if("custom"===e.launchTimeline)return e.launchTimelineCustom?`Specific Deadline: ${e.launchTimelineCustom}`:"Custom Target";let t=n.find(t=>t.value===e.launchTimeline);return t?`${t.label} (${t.sublabel})`:e.launchTimeline||"Not specified"}function d(e){let t=r.filter(t=>e.features.includes(t.id)).map(e=>e.label);return e.features.includes("custom")&&e.customFeaturesText&&t.push(`Custom: ${e.customFeaturesText}`),t}e.s(["P",0,i,"X",0,{fullName:"",companyName:"",email:"",phone:"",businessOverview:"",websiteCategory:"",websiteCategoryCustom:"",estimatedPages:"",estimatedPagesCustom:"",features:[],customFeaturesText:"",brandLogo:"",websiteCopy:"",photos:"",domainName:"",webHosting:"",assetNotes:"",referenceUrls:"",launchTimeline:"",launchTimelineCustom:"",agreedToRevisionTerms:!1,agreedToLiabilityTerms:!1},"k",0,r,"F",0,o,"b",0,[{id:1,title:"Company & Contact",subtitle:"Your contact details & business overview",stepLabel:"Contact"},{id:2,title:"Website Scope",subtitle:"Website category, estimated pages, and functionality",stepLabel:"Scope"},{id:3,title:"Asset Readiness",subtitle:"What you have prepared vs. what you need assistance with",stepLabel:"Assets"},{id:4,title:"References & Timeline",subtitle:"Inspiration websites and expected target launch",stepLabel:"Timeline"},{id:5,title:"Review & Submit",subtitle:"Review project summary and working terms",stepLabel:"Terms"}],"o",0,n,"u",0,t],54053);let p="https://client-onboarding-scope.vercel.app";e.s(["Y",0,function(e,t=p){let o=a(e),r=l(e),n=s(e),c=d(e),u=e.phone.replace(/[^0-9+]/g,""),f=`https://wa.me/${u.replace("+","")}`;return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Onboarding - ${e.companyName}</title>
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
                      ${e.companyName}
                    </h1>
                    <div style="font-size: 13px; color: #ffedd5; margin-top: 4px;">
                      Submitted by ${e.fullName}
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
                    <a href="mailto:${e.email}?subject=Regarding%20your%20website%20quote%20for%20${encodeURIComponent(e.companyName)}" style="display: inline-block; padding: 7px 14px; background-color: #ea580c; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600;">
                      ✉ Reply via Email
                    </a>
                  </td>
                  <td>
                    <a href="${f}" style="display: inline-block; padding: 7px 14px; background-color: #ffffff; color: #1c1917; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; border: 1px solid #e7e5e4;">
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
                    <td style="padding: 4px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${e.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 8px; font-size: 13px; color: #78716c;">Company / Brand:</td>
                    <td style="padding: 4px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${e.companyName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 8px; font-size: 13px; color: #78716c;">Email:</td>
                    <td style="padding: 4px 8px; font-size: 13px; font-weight: 600; color: #ea580c;">
                      <a href="mailto:${e.email}" style="color: #ea580c; text-decoration: none;">${e.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 8px; font-size: 13px; color: #78716c;">Phone / WhatsApp:</td>
                    <td style="padding: 4px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">
                      <a href="tel:${e.phone}" style="color: #1c1917; text-decoration: none;">${e.phone}</a>
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
${e.businessOverview}
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
                    <td style="padding: 6px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${o}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c;">Estimated Pages:</td>
                    <td style="padding: 6px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${r}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c; vertical-align: top;">Key Features:</td>
                    <td style="padding: 6px 8px; font-size: 13px; color: #1c1917;">
                      ${c.length>0?c.map(e=>`<div style="margin-bottom: 4px;">✓ ${e}</div>`).join(""):"<em>None selected</em>"}
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
                  ${i.map(t=>{let o="have"===e[t.id]?"READY (Client has it)":"NEEDED (Designer to provide)",r="have"===e[t.id]?"#15803d":"#ea580c";return`
                    <tr>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #f5f5f4; color: #1c1917;">${t.label}</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #f5f5f4; font-weight: 600; color: ${r};">${o}</td>
                    </tr>`}).join("")}
                </table>
                ${e.assetNotes?`
                  <div style="margin-top: 8px; font-size: 12px; color: #78716c; font-style: italic;">
                    <strong>Notes:</strong> ${e.assetNotes}
                  </div>`:""}
              </div>

              <!-- References & Timeline -->
              <div style="margin-bottom: 28px;">
                <h2 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #78716c; font-weight: 600;">
                  5. References & Target Launch
                </h2>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #fafaf9; border-radius: 10px; border: 1px solid #f5f5f4; padding: 16px;">
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c; width: 35%;">Launch Timeline:</td>
                    <td style="padding: 6px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${n}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c; vertical-align: top;">Reference Links:</td>
                    <td style="padding: 6px 8px; font-size: 13px; color: #1c1917; white-space: pre-line;">${e.referenceUrls||"<em>None provided</em>"}</td>
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
              Sent automatically via <a href="${t}" style="color: #78716c; text-decoration: underline;">Client Onboarding & Project Scope</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()},"$",0,function(e,t=p){let o=a(e),r=l(e),n=s(e),c=d(e),u=i.map(t=>{let o="have"===e[t.id]?"READY (Client has it)":"NEEDED (Designer to provide)";return`  • ${t.label}: ${o}`}).join("\n");return`
NEW CLIENT WEBSITE ONBOARDING & QUOTE REQUEST
======================================================
Company / Brand: ${e.companyName}
Client Name:     ${e.fullName}
Email:           ${e.email}
Phone/WhatsApp:  ${e.phone}

1. BUSINESS OVERVIEW & GOALS
------------------------------------------------------
${e.businessOverview}

2. PROJECT SCOPE & DELIVERABLES
------------------------------------------------------
• Category:        ${o}
• Estimated Pages: ${r}
• Key Features:
${c.length>0?c.map(e=>`  ✓ ${e}`).join("\n"):"  (None selected)"}

3. ASSET READINESS MATRIX
------------------------------------------------------
${u}
${e.assetNotes?`• Notes: ${e.assetNotes}`:""}

4. REFERENCES & TIMELINE
------------------------------------------------------
• Target Timeline: ${n}
• References:
${e.referenceUrls||"  (None provided)"}

5. TERMS & AGREEMENTS
------------------------------------------------------
✓ 2 Rounds of Revisions & 50% Milestone Advance: Accepted
✓ Third-Party Costs & Liability Cap: Accepted

======================================================
View Intake Portal: ${t}
Sent via Client Onboarding & Project Scope System
  `.trim()},"N",0,function(e,t=p){let o=e.fullName.split(" ")[0]||e.fullName,r=a(e),i=s(e);return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Intake Confirmation - ${e.companyName}</title>
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
                      Thank you, ${o}.
                    </h1>
                    <p style="margin: 0; font-size: 15px; color: #57534e; line-height: 1.6;">
                      We've safely received the project requirements for <strong style="color: #1c1917;">${e.companyName}</strong>. We're excited to dive into your vision and prepare a tailored design and development proposal.
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
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${e.companyName}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 13px; color: #78716c;">Website Type:</td>
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${r}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 13px; color: #78716c;">Estimated Timeline:</td>
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${i}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 13px; color: #78716c;">Contact Email:</td>
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${e.email}</td>
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
                  Simply reply directly to this email or reach out on WhatsApp at <strong style="color: #9a3412;">${e.phone}</strong>.
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
  `.trim()},"M",0,function(e,t=p){let o=e.fullName.split(" ")[0]||e.fullName,r=a(e),i=s(e);return`
Hi ${o},

Thank you for completing the website onboarding for ${e.companyName}!

We've safely received your project specifications and are already reviewing your vision.

YOUR PROJECT SNAPSHOT:
------------------------------------------------------
• Company / Brand:   ${e.companyName}
• Website Category:  ${r}
• Target Timeline:   ${i}
• Contact Email:     ${e.email}

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
${t}
  `.trim()}],4828)},43531,e=>{let t=(0,e.i(75254).f)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["f",0,t],43531)},74886,e=>{let t=(0,e.i(75254).f)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["f",0,t],74886)},78583,e=>{let t=(0,e.i(75254).f)("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["f",0,t],78583)},63488,75254,e=>{var t=e.i(71645);let o=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},r=(...e)=>e.filter((e,t,o)=>!!e&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)(({color:e="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:l="",children:s,iconNode:d,...p},c)=>(0,t.createElement)("svg",{ref:c,...i,width:o,height:o,stroke:e,strokeWidth:a?24*Number(n)/Number(o):n,className:r("lucide",l),...!s&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(p)&&{"aria-hidden":"true"},...p},[...d.map(([e,o])=>(0,t.createElement)(e,o)),...Array.isArray(s)?s:[s]])),a=(e,i)=>{let a=(0,t.forwardRef)(({className:a,...l},s)=>(0,t.createElement)(n,{ref:s,iconNode:i,className:r(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,a),...l}));return a.displayName=o(e),a};e.s(["f",0,a],75254);let l=a("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["f",0,l],63488)},83086,e=>{let t=(0,e.i(75254).f)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);e.s(["f",0,t],83086)},22016,(e,t,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var r={default:function(){return b},useLinkStatus:function(){return y}};for(var i in r)Object.defineProperty(o,i,{enumerable:!0,get:r[i]});let n=e.r(90809),a=e.r(43476),l=n._(e.r(71645)),s=e.r(95057),d=e.r(8372),p=e.r(18581),c=e.r(18967),u=e.r(5550),f=e.r(88540),g=e.r(91949),h=e.r(73668),m=e.r(9396);function b(t){var o;let r,i,n,[b,y]=(0,l.useOptimistic)(g.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:w,as:C,children:k,prefetch:S=null,passHref:E,replace:N,shallow:$,scroll:P,onClick:T,onMouseEnter:z,onTouchStart:A,legacyBehavior:L=!1,onNavigate:R,transitionTypes:O,ref:I,unstable_dynamicOnHover:M,...j}=t;r=k,L&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let W=l.default.useContext(d.AppRouterContext),F=!1!==S,B=!1===S?"none":!0===S?"full":"auto",D="none"!==B?"auto"===B?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,U="string"==typeof(o=C||w)?o:(0,s.formatUrl)(o);if(L){if(r?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");i=l.default.Children.only(r)}let _=L?i&&"object"==typeof i&&i.ref:I,H,q=l.default.useCallback(e=>(null!==W&&(v.current=(0,g.mountLinkInstance)(e,U,W,D,F,y,H)),()=>{v.current&&((0,g.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,g.unmountPrefetchableInstance)(e)}),[F,U,W,D,y,H]),K={ref:(0,p.useMergedRef)(q,_),onClick(t){L||"function"!=typeof T||T(t),L&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!W||t.defaultPrevented||function(t,o,r,i,n,a,l,s="none"){if("u">typeof window){let d,{nodeName:p}=t.currentTarget;if("A"===p.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(o)){i&&(t.preventDefault(),location.replace(o));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{navigate:c}=e.r(32916);c(o,i?"replace":"push",!1===n?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,r.current,l,s)}}(t,U,v,N,P,R,O,B)},onMouseEnter(e){L||"function"!=typeof z||z(e),L&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),W&&F&&(0,g.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){L||"function"!=typeof A||A(e),L&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),W&&F&&(0,g.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,c.isAbsoluteUrl)(U)?K.href=U:L&&!E&&("a"!==i.type||"href"in i.props)||(K.href=(0,u.addBasePath)(U)),n=L?l.default.cloneElement(i,K):(0,a.jsx)("a",{...j,...K,children:r}),(0,a.jsx)(x.Provider,{value:b,children:n})}let x=(0,l.createContext)(g.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(x);("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},18581,(e,t,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=e.r(71645);function i(e,t){let o=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=o.current;e&&(o.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(o.current=n(e,r)),t&&(i.current=n(t,r))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let o=e(t);return"function"==typeof o?o:()=>e(null)}}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},95057,(e,t,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var r={formatUrl:function(){return l},formatWithValidation:function(){return d},urlObjectKeys:function(){return s}};for(var i in r)Object.defineProperty(o,i,{enumerable:!0,get:r[i]});let n=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:o}=e,r=e.protocol||"",i=e.pathname||"",l=e.hash||"",s=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:o&&(d=t+(~o.indexOf(":")?`[${o}]`:o),e.port&&(d+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let p=e.search||s&&`?${s}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||a.test(r))&&!1!==d?(d="//"+(d||""),i&&"/"!==i[0]&&(i="/"+i)):d||(d=""),l&&"#"!==l[0]&&(l="#"+l),p&&"?"!==p[0]&&(p="?"+p),i=i.replace(/[?#]/g,encodeURIComponent),p=p.replace("#","%23"),`${r}${d}${i}${p}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return l(e)}},73668,(e,t,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"isLocalURL",{enumerable:!0,get:function(){return n}});let r=e.r(18967),i=e.r(52817);function n(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),o=new URL(e,t);return o.origin===t&&(0,i.hasBasePath)(o.pathname)}catch(e){return!1}}},18967,(e,t,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var r={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return v},NormalizeError:function(){return x},PageNotFoundError:function(){return y},SP:function(){return h},ST:function(){return m},WEB_VITALS:function(){return n},execOnce:function(){return a},getDisplayName:function(){return c},getLocationOrigin:function(){return d},getURL:function(){return p},isAbsoluteUrl:function(){return s},isResSent:function(){return u},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return C}};for(var i in r)Object.defineProperty(o,i,{enumerable:!0,get:r[i]});let n=["CLS","FCP","INP","LCP","TTFB"];function a(e){let t,o=!1;return(...r)=>(o||(o=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&l.test(e)};function d(){let{protocol:e,hostname:t,port:o}=window.location;return`${e}//${t}${o?":"+o:""}`}function p(){let{href:e}=window.location,t=d();return e.substring(t.length)}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let o=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(o&&u(o))return r;if(!r)throw Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`);return r}let h="u">typeof performance,m=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class x extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function C(e){return JSON.stringify({message:e.message,stack:e.stack})}}])})();