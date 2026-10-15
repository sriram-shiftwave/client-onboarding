(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4828,54053,e=>{let t=[{value:"landing-page",label:"Single-Page Landing Page",description:"Focused page designed for high-converting lead generation or product launches"},{value:"multi-page-business",label:"Multi-Page Business Website",description:"Comprehensive corporate presence with company info, services, and team details"},{value:"ecommerce",label:"E-Commerce Store",description:"Online catalog, shopping cart, and secure customer checkout"},{value:"custom-web-app",label:"Custom Web App / Portal",description:"Interactive dashboard, member portal, or specialized application workflow"},{value:"redesign",label:"Website Redesign",description:"Modernizing and upgrading an existing site's design, speed, and user experience"},{value:"other",label:"None of the above / Custom Scope",description:"A unique website concept or custom requirement not covered by the standard options"}],o=[{value:"1",label:"1 Page",sublabel:"Single landing page"},{value:"3-5",label:"3–5 Pages",sublabel:"Essential company website"},{value:"6-10",label:"6–10 Pages",sublabel:"Full multi-section website"},{value:"10+",label:"10+ Pages",sublabel:"Extensive site or portal"},{value:"custom",label:"None of the above",sublabel:"Describe your custom scope"}],n=[{id:"contact-form",label:"Contact & Lead Capture Form",description:"Collect validated enquiries and route notifications to your inbox"},{id:"whatsapp",label:"WhatsApp Live Chat Integration",description:"One-click chat button to let visitors message directly on WhatsApp"},{id:"payment",label:"Online Payment Gateway",description:"Accept credit cards, debit cards, Apple Pay, Stripe, or local gateways"},{id:"booking",label:"Appointment / Booking Calendar",description:"Automated self-service appointment scheduling with calendar synchronization"},{id:"cms",label:"Content Management System (CMS)",description:"Admin panel to update blog posts, services, or text without a developer"},{id:"seo",label:"SEO Foundations & Google Maps",description:"Meta tags, schema markup, Google Maps embed, and search indexing"},{id:"custom",label:"None of the above / Custom Features",description:"Specify any custom API integrations, user accounts, or proprietary tools"}],r=[{id:"brandLogo",label:"Brand Logo & Visual Identity",description:"Vector logo files, brand style guide, color palette, and typography",haveLabel:"I have it ready",needLabel:"I need you to create / provide it"},{id:"websiteCopy",label:"Website Text & Copywriting",description:"Headlines, service descriptions, about us text, and call-to-actions",haveLabel:"I will provide the copy",needLabel:"I need copywriting services"},{id:"photos",label:"Product & Business Photography",description:"High-resolution photos of your products, premises, team, or services",haveLabel:"I have high-res photos ready",needLabel:"Need curated stock / AI visuals"},{id:"domainName",label:"Domain Name (e.g., yourbrand.com)",description:"The web address visitors type to access your website",haveLabel:"I already own the domain",needLabel:"I need assistance acquiring one"},{id:"webHosting",label:"Web Hosting Infrastructure",description:"The server or cloud platform where your website runs",haveLabel:"I have hosting setup",needLabel:"I need you to configure hosting"}],i=[{value:"urgent",label:"Urgent",sublabel:"< 1 Week",description:"High-priority expedited turnaround"},{value:"standard",label:"Standard",sublabel:"2–3 Weeks",description:"Optimal balance of design exploration & delivery"},{value:"flexible",label:"Flexible",sublabel:"1 Month+",description:"Open timeline with phased rollouts"},{value:"custom",label:"None of the above",sublabel:"Specific Deadline",description:"Fixed event launch or custom schedule"}];function a(e){if("other"===e.websiteCategory)return e.websiteCategoryCustom?`Custom: ${e.websiteCategoryCustom}`:"Custom Scope";let o=t.find(t=>t.value===e.websiteCategory);return o?o.label:e.websiteCategory||"Not specified"}function s(e){if("custom"===e.estimatedPages)return e.estimatedPagesCustom?`Custom: ${e.estimatedPagesCustom}`:"Custom Pages";let t=o.find(t=>t.value===e.estimatedPages);return t?`${t.label} (${t.sublabel})`:e.estimatedPages||"Not specified"}function l(e){if("custom"===e.launchTimeline)return e.launchTimelineCustom?`Specific Deadline: ${e.launchTimelineCustom}`:"Custom Target";let t=i.find(t=>t.value===e.launchTimeline);return t?`${t.label} (${t.sublabel})`:e.launchTimeline||"Not specified"}function d(e){let t=n.filter(t=>e.features.includes(t.id)).map(e=>e.label);return e.features.includes("custom")&&e.customFeaturesText&&t.push(`Custom: ${e.customFeaturesText}`),t}e.s(["P",0,r,"X",0,{fullName:"",companyName:"",email:"",phone:"",businessOverview:"",websiteCategory:"",websiteCategoryCustom:"",estimatedPages:"",estimatedPagesCustom:"",features:[],customFeaturesText:"",brandLogo:"",websiteCopy:"",photos:"",domainName:"",webHosting:"",assetNotes:"",referenceUrls:"",launchTimeline:"",launchTimelineCustom:"",agreedToRevisionTerms:!1,agreedToLiabilityTerms:!1},"k",0,n,"F",0,o,"b",0,[{id:1,title:"Company & Contact",subtitle:"Your contact details & business overview",stepLabel:"Contact"},{id:2,title:"Website Scope",subtitle:"Website category, estimated pages, and functionality",stepLabel:"Scope"},{id:3,title:"Asset Readiness",subtitle:"What you have prepared vs. what you need assistance with",stepLabel:"Assets"},{id:4,title:"References & Timeline",subtitle:"Inspiration websites and expected target launch",stepLabel:"Timeline"},{id:5,title:"Review & Submit",subtitle:"Review project summary and working terms",stepLabel:"Terms"}],"o",0,i,"u",0,t],54053);let c="https://client-onboarding-scope.vercel.app";e.s(["Y",0,function(e,t=c){let o=a(e),n=s(e),i=l(e),p=d(e),u=e.phone.replace(/[^0-9+]/g,""),f=`https://wa.me/${u.replace("+","")}`;return`
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
                    <td style="padding: 6px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${n}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 8px; font-size: 13px; color: #78716c; vertical-align: top;">Key Features:</td>
                    <td style="padding: 6px 8px; font-size: 13px; color: #1c1917;">
                      ${p.length>0?p.map(e=>`<div style="margin-bottom: 4px;">✓ ${e}</div>`).join(""):"<em>None selected</em>"}
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
                  ${r.map(t=>{let o="have"===e[t.id]?"READY (Client has it)":"NEEDED (Designer to provide)",n="have"===e[t.id]?"#15803d":"#ea580c";return`
                    <tr>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #f5f5f4; color: #1c1917;">${t.label}</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #f5f5f4; font-weight: 600; color: ${n};">${o}</td>
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
                    <td style="padding: 6px 8px; font-size: 13px; font-weight: 600; color: #1c1917;">${i}</td>
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
  `.trim()},"$",0,function(e,t=c){let o=a(e),n=s(e),i=l(e),p=d(e),u=r.map(t=>{let o="have"===e[t.id]?"READY (Client has it)":"NEEDED (Designer to provide)";return`  • ${t.label}: ${o}`}).join("\n");return`
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
• Estimated Pages: ${n}
• Key Features:
${p.length>0?p.map(e=>`  ✓ ${e}`).join("\n"):"  (None selected)"}

3. ASSET READINESS MATRIX
------------------------------------------------------
${u}
${e.assetNotes?`• Notes: ${e.assetNotes}`:""}

4. REFERENCES & TIMELINE
------------------------------------------------------
• Target Timeline: ${i}
• References:
${e.referenceUrls||"  (None provided)"}

5. TERMS & AGREEMENTS
------------------------------------------------------
✓ 2 Rounds of Revisions & 50% Milestone Advance: Accepted
✓ Third-Party Costs & Liability Cap: Accepted

======================================================
View Intake Portal: ${t}
Sent via Client Onboarding & Project Scope System
  `.trim()},"N",0,function(e,t=c){let o=e.fullName.split(" ")[0]||e.fullName,n=a(e),r=l(e);return`
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
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${n}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 13px; color: #78716c;">Estimated Timeline:</td>
                  <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #1c1917;">${r}</td>
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
  `.trim()},"M",0,function(e,t=c){let o=e.fullName.split(" ")[0]||e.fullName,n=a(e),r=l(e);return`
Hi ${o},

Thank you for completing the website onboarding for ${e.companyName}!

We've safely received your project specifications and are already reviewing your vision.

YOUR PROJECT SNAPSHOT:
------------------------------------------------------
• Company / Brand:   ${e.companyName}
• Website Category:  ${n}
• Target Timeline:   ${r}
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
  `.trim()}],4828)},89535,e=>{var t=e.i(43476),o=e.i(71645),n=e.i(22016),r=e.i(63488),i=e.i(75254);let a=(0,i.f)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var s=e.i(74886),l=e.i(43531);let d=(0,i.f)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),c=(0,i.f)("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),p=(0,i.f)("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]),u=(0,i.f)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var f=e.i(78583),m=e.i(83086),x=e.i(4828);let h={fullName:"Elena Rostova",companyName:"Lumina Architectural Studio",email:"elena@luminastudio.design",phone:"+1 (415) 890-2341",businessOverview:"We are a boutique sustainable architecture and interior design firm based in San Francisco. We need an elevated, minimalist portfolio website to showcase our recent residential and commercial projects to high-end prospective clients and press publications.",websiteCategory:"multi-page-business",estimatedPages:"6-10",features:["contact-form","whatsapp","booking","seo-maps"],customFeaturesText:"Interactive project gallery with filterable materials and case study layouts.",brandLogo:"have",websiteCopy:"need",photos:"have",domainName:"have",webHosting:"need",assetNotes:"Brand guidelines and high-resolution architectural photography ready on Google Drive. Need help with punchy headline copywriting and setting up fast CDN hosting.",referenceUrls:"1. https://olsonkundig.com - love the generous negative space and photography focus\n2. https://snøhetta.com - minimal typography and editorial grid\n3. https://studio-mcgee.com - clean inquiry workflow",launchTimeline:"standard",agreedToRevisionTerms:!0,agreedToLiabilityTerms:!0};e.s(["default",0,function(){let[e,i]=(0,o.useState)("client"),[g,b]=(0,o.useState)("preview"),[y,v]=(0,o.useState)("desktop"),[w,k]=(0,o.useState)(!1),N=window.location.origin?window.location.origin:"https://client-onboarding-scope.vercel.app",C=(0,x.N)(h,N),j=(0,x.M)(h,N),S=(0,x.Y)(h,N),$=(0,x.$)(h,N),T="client"===e?C:S,E="client"===e?j:$,P=e=>{navigator.clipboard.writeText(e),k(!0),setTimeout(()=>k(!1),2200)};return(0,t.jsxs)("div",{className:"min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col",children:[(0,t.jsx)("header",{className:"border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 sticky top-0 z-30",children:(0,t.jsxs)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsxs)(n.default,{href:"/",className:"inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 px-2.5 py-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors",children:[(0,t.jsx)(a,{className:"w-4 h-4"}),(0,t.jsx)("span",{children:"Back to Form"})]}),(0,t.jsx)("div",{className:"h-4 w-px bg-stone-200 dark:bg-stone-800"}),(0,t.jsxs)("h1",{className:"text-sm font-semibold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-2",children:[(0,t.jsx)(r.f,{className:"w-4 h-4 text-orange-600"}),"Email Template Studio"]})]}),(0,t.jsx)("div",{className:"flex items-center gap-2",children:(0,t.jsxs)("button",{onClick:()=>P("text"===g?E:T),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium transition-colors shadow-sm",children:[w?(0,t.jsx)(l.f,{className:"w-3.5 h-3.5"}):(0,t.jsx)(s.f,{className:"w-3.5 h-3.5"}),(0,t.jsx)("span",{children:w?"Copied!":"text"===g?"Copy Plain Text":"Copy HTML Code"})]})})]})}),(0,t.jsx)("div",{className:"border-b border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm px-4 sm:px-6 py-3",children:(0,t.jsxs)("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3",children:[(0,t.jsxs)("div",{className:"flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-800 self-start",children:[(0,t.jsxs)("button",{onClick:()=>i("client"),className:`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${"client"===e?"bg-white dark:bg-stone-900 text-orange-600 dark:text-orange-400 shadow-sm":"text-stone-600 dark:text-stone-400 hover:text-stone-900"}`,children:[(0,t.jsx)(m.f,{className:"w-3.5 h-3.5"}),"Client Thank-You Email"]}),(0,t.jsxs)("button",{onClick:()=>i("admin"),className:`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${"admin"===e?"bg-white dark:bg-stone-900 text-orange-600 dark:text-orange-400 shadow-sm":"text-stone-600 dark:text-stone-400 hover:text-stone-900"}`,children:[(0,t.jsx)(f.f,{className:"w-3.5 h-3.5"}),"Admin Notification Email"]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 self-end md:self-auto",children:[(0,t.jsxs)("div",{className:"flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs",children:[(0,t.jsxs)("button",{onClick:()=>b("preview"),className:`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${"preview"===g?"bg-white dark:bg-stone-900 font-medium text-stone-900 dark:text-stone-100 shadow-sm":"text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"}`,title:"Visual Preview",children:[(0,t.jsx)(u,{className:"w-3.5 h-3.5"}),(0,t.jsx)("span",{children:"Visual"})]}),(0,t.jsxs)("button",{onClick:()=>b("html"),className:`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${"html"===g?"bg-white dark:bg-stone-900 font-medium text-stone-900 dark:text-stone-100 shadow-sm":"text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"}`,title:"HTML Source Code",children:[(0,t.jsx)(p,{className:"w-3.5 h-3.5"}),(0,t.jsx)("span",{children:"HTML"})]}),(0,t.jsxs)("button",{onClick:()=>b("text"),className:`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${"text"===g?"bg-white dark:bg-stone-900 font-medium text-stone-900 dark:text-stone-100 shadow-sm":"text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"}`,title:"Plain-Text Version",children:[(0,t.jsx)(f.f,{className:"w-3.5 h-3.5"}),(0,t.jsx)("span",{children:"Plain Text"})]})]}),"preview"===g&&(0,t.jsxs)("div",{className:"flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs",children:[(0,t.jsx)("button",{onClick:()=>v("desktop"),className:`p-1.5 rounded-lg transition-all ${"desktop"===y?"bg-white dark:bg-stone-900 text-orange-600 shadow-sm":"text-stone-500 hover:text-stone-900"}`,title:"Desktop View (640px)",children:(0,t.jsx)(c,{className:"w-3.5 h-3.5"})}),(0,t.jsx)("button",{onClick:()=>v("mobile"),className:`p-1.5 rounded-lg transition-all ${"mobile"===y?"bg-white dark:bg-stone-900 text-orange-600 shadow-sm":"text-stone-500 hover:text-stone-900"}`,title:"Mobile View (375px)",children:(0,t.jsx)(d,{className:"w-3.5 h-3.5"})})]})]})]})}),(0,t.jsxs)("main",{className:"flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 flex flex-col items-center",children:[(0,t.jsxs)("div",{className:"w-full mb-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-xs text-stone-600 dark:text-stone-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"font-semibold text-stone-900 dark:text-stone-100",children:"client"===e?"✦ Client Thank-You & Confirmation Email":"✦ Admin Intake Notification Email"}),(0,t.jsx)("p",{className:"text-[11px] text-stone-500 mt-0.5",children:"client"===e?"Sent automatically to the client after onboarding submission. Outlines their project snapshot and 3-step timeline.":"Sent to your studio inbox with client contact details, 1-click email/WhatsApp reply links, and asset readiness matrix."})]}),(0,t.jsxs)("div",{className:"text-[11px] font-mono text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded",children:["Domain: ",N]})]}),"preview"===g&&(0,t.jsx)("div",{className:`w-full transition-all duration-300 flex justify-center ${"mobile"===y?"max-w-[400px]":"max-w-2xl"}`,children:(0,t.jsxs)("div",{className:"w-full rounded-2xl overflow-hidden border border-stone-300 dark:border-stone-700 shadow-xl bg-[#f6f5f4]",children:[(0,t.jsxs)("div",{className:"bg-stone-200 dark:bg-stone-800 px-4 py-2 border-b border-stone-300 dark:border-stone-700 flex items-center justify-between text-xs text-stone-600 dark:text-stone-300",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"w-2.5 h-2.5 rounded-full bg-red-400 inline-block"}),(0,t.jsx)("span",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"}),(0,t.jsx)("span",{className:"w-2.5 h-2.5 rounded-full bg-green-400 inline-block"}),(0,t.jsx)("span",{className:"ml-2 font-medium",children:"client"===e?`Subject: Project Intake Confirmation - ${h.companyName}`:`Subject: New Project Onboarding - ${h.companyName}`})]}),(0,t.jsx)("span",{className:"text-[10px] uppercase font-mono text-stone-400",children:y})]}),(0,t.jsx)("iframe",{title:"Email Preview",srcDoc:T,className:"w-full h-[760px] border-none bg-white",sandbox:"allow-same-origin allow-popups"})]})}),"html"===g&&(0,t.jsxs)("div",{className:"w-full max-w-4xl rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-900 text-stone-100 p-4 font-mono text-xs overflow-x-auto shadow-lg",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between pb-3 mb-3 border-b border-stone-800 text-stone-400 text-[11px]",children:[(0,t.jsx)("span",{children:"HTML Source Code (Ready for Web3Forms, Resend, SendGrid, or Mailchimp)"}),(0,t.jsxs)("button",{onClick:()=>P(T),className:"hover:text-white transition-colors flex items-center gap-1",children:[w?(0,t.jsx)(l.f,{className:"w-3.5 h-3.5"}):(0,t.jsx)(s.f,{className:"w-3.5 h-3.5"}),w?"Copied":"Copy Code"]})]}),(0,t.jsx)("pre",{className:"whitespace-pre-wrap leading-relaxed text-stone-300",children:T})]}),"text"===g&&(0,t.jsxs)("div",{className:"w-full max-w-2xl rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 font-mono text-xs overflow-x-auto shadow-md",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between pb-3 mb-4 border-b border-stone-100 dark:border-stone-800 text-stone-500 text-[11px]",children:[(0,t.jsx)("span",{children:"Plain-Text Fallback Content"}),(0,t.jsxs)("button",{onClick:()=>P(E),className:"hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-1 text-orange-600 dark:text-orange-400 font-semibold",children:[w?(0,t.jsx)(l.f,{className:"w-3.5 h-3.5"}):(0,t.jsx)(s.f,{className:"w-3.5 h-3.5"}),w?"Copied":"Copy Text"]})]}),(0,t.jsx)("pre",{className:"whitespace-pre-wrap leading-relaxed text-stone-800 dark:text-stone-200",children:E})]})]})]})}],89535)},43531,e=>{let t=(0,e.i(75254).f)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["f",0,t],43531)},74886,e=>{let t=(0,e.i(75254).f)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["f",0,t],74886)},78583,e=>{let t=(0,e.i(75254).f)("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["f",0,t],78583)},63488,75254,e=>{var t=e.i(71645);let o=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},n=(...e)=>e.filter((e,t,o)=>!!e&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.forwardRef)(({color:e="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:l,iconNode:d,...c},p)=>(0,t.createElement)("svg",{ref:p,...r,width:o,height:o,stroke:e,strokeWidth:a?24*Number(i)/Number(o):i,className:n("lucide",s),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,o])=>(0,t.createElement)(e,o)),...Array.isArray(l)?l:[l]])),a=(e,r)=>{let a=(0,t.forwardRef)(({className:a,...s},l)=>(0,t.createElement)(i,{ref:l,iconNode:r,className:n(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,a),...s}));return a.displayName=o(e),a};e.s(["f",0,a],75254);let s=a("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["f",0,s],63488)},83086,e=>{let t=(0,e.i(75254).f)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);e.s(["f",0,t],83086)},22016,(e,t,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return y}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});let i=e.r(90809),a=e.r(43476),s=i._(e.r(71645)),l=e.r(95057),d=e.r(8372),c=e.r(18581),p=e.r(18967),u=e.r(5550),f=e.r(88540),m=e.r(91949),x=e.r(73668),h=e.r(9396);function g(t){var o;let n,r,i,[g,y]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:w,as:k,children:N,prefetch:C=null,passHref:j,replace:S,shallow:$,scroll:T,onClick:E,onMouseEnter:P,onTouchStart:z,legacyBehavior:A=!1,onNavigate:L,transitionTypes:R,ref:O,unstable_dynamicOnHover:I,...M}=t;n=N,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let W=s.default.useContext(d.AppRouterContext),F=!1!==C,D=!1===C?"none":!0===C?"full":"auto",B="none"!==D?"auto"===D?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,U="string"==typeof(o=k||w)?o:(0,l.formatUrl)(o);if(A){if(n?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");r=s.default.Children.only(n)}let H=A?r&&"object"==typeof r&&r.ref:O,_,q=s.default.useCallback(e=>(null!==W&&(v.current=(0,m.mountLinkInstance)(e,U,W,B,F,y,_)),()=>{v.current&&((0,m.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,m.unmountPrefetchableInstance)(e)}),[F,U,W,B,y,_]),V={ref:(0,c.useMergedRef)(q,H),onClick(t){A||"function"!=typeof E||E(t),A&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!W||t.defaultPrevented||function(t,o,n,r,i,a,s,l="none"){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(o)){r&&(t.preventDefault(),location.replace(o));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{navigate:p}=e.r(32916);p(o,r?"replace":"push",!1===i?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,n.current,s,l)}}(t,U,v,S,T,L,R,D)},onMouseEnter(e){A||"function"!=typeof P||P(e),A&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),W&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){A||"function"!=typeof z||z(e),A&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),W&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,p.isAbsoluteUrl)(U)?V.href=U:A&&!j&&("a"!==r.type||"href"in r.props)||(V.href=(0,u.addBasePath)(U)),i=A?s.default.cloneElement(r,V):(0,a.jsx)("a",{...M,...V,children:n}),(0,a.jsx)(b.Provider,{value:g,children:i})}let b=(0,s.createContext)(m.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(b);("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},18581,(e,t,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"useMergedRef",{enumerable:!0,get:function(){return r}});let n=e.r(71645);function r(e,t){let o=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=o.current;e&&(o.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(o.current=i(e,n)),t&&(r.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let o=e(t);return"function"==typeof o?o:()=>e(null)}}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},95057,(e,t,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});let i=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:o}=e,n=e.protocol||"",r=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:o&&(d=t+(~o.indexOf(":")?`[${o}]`:o),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==d?(d="//"+(d||""),r&&"/"!==r[0]&&(r="/"+r)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),r=r.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${d}${r}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},73668,(e,t,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),r=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),o=new URL(e,t);return o.origin===t&&(0,r.hasBasePath)(o.pathname)}catch(e){return!1}}},18967,(e,t,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return v},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return x},ST:function(){return h},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return p},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return u},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return k}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});let i=["CLS","FCP","INP","LCP","TTFB"];function a(e){let t,o=!1;return(...n)=>(o||(o=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function d(){let{protocol:e,hostname:t,port:o}=window.location;return`${e}//${t}${o?":"+o:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let o=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(o&&u(o))return n;if(!n)throw Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`);return n}let x="u">typeof performance,h=x&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function k(e){return JSON.stringify({message:e.message,stack:e.stack})}}])})();