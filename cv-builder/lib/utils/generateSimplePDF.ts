import { CVData } from '../types';

function getTemplateStyles(templateId: string) {
    const baseStyles = `
        body { font-family: Arial, sans-serif; margin: 0; padding: 40px; color: #333; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; margin-bottom: 15px; }
    `;
    
    switch (templateId) {
        case 'modern':
            return baseStyles + `
                .header { display: flex; background: #f8f9fa; padding: 30px; margin-bottom: 30px; }
                .photo { width: 120px; height: 120px; border-radius: 50%; margin-right: 30px; }
                .header-info { flex: 1; }
                .name { font-size: 32px; font-weight: bold; color: #1a1a1a; margin-bottom: 5px; }
                .title { font-size: 16px; color: #6d54b0; text-transform: uppercase; }
                .section-title { color: #1a1a1a; border-bottom: 2px solid #6d54b0; padding-bottom: 5px; }
                .contact-info { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
            `;
        case 'classic':
            return baseStyles + `
                .header { text-align: center; border-bottom: 3px solid #2c3e50; padding-bottom: 20px; margin-bottom: 30px; }
                .name { font-size: 28px; font-weight: bold; color: #2c3e50; }
                .title { font-size: 16px; color: #34495e; font-style: italic; }
                .section-title { color: #2c3e50; border-bottom: 1px solid #bdc3c7; }
                .contact-info { text-align: center; margin: 15px 0; }
            `;
        case 'minimal':
            return baseStyles + `
                .header { margin-bottom: 40px; }
                .name { font-size: 24px; font-weight: 300; color: #333; }
                .title { font-size: 14px; color: #666; }
                .section-title { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #333; }
                .contact-info { font-size: 12px; color: #666; }
            `;
        case 'bold':
            return baseStyles + `
                .header { background: #000; color: #fff; padding: 40px; margin: -40px -40px 30px -40px; }
                .name { font-size: 36px; font-weight: bold; }
                .title { font-size: 18px; color: #ccc; }
                .section-title { background: #000; color: #fff; padding: 10px; margin: 0 -10px 15px -10px; }
                .contact-info { color: #ccc; }
            `;
        default:
            return baseStyles;
    }
}

export function generateSimplePDF(cvData: CVData) {
    const templateStyles = getTemplateStyles(cvData.templateId);
    
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>CV - ${cvData.personal.fullName}</title>
    <style>
        ${templateStyles}
        .experience-item, .education-item { margin-bottom: 15px; }
        .job-title, .degree { font-weight: bold; font-size: 16px; }
        .company, .school { font-style: italic; color: #666; }
        .date { font-size: 12px; color: #888; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #f0f0f0; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-info">
                <div class="name">${cvData.personal.fullName}</div>
                <div class="title">${cvData.personal.title}</div>
                <div class="contact-info">
                    ${cvData.personal.email ? `<div>📧 ${cvData.personal.email}</div>` : ''}
                    ${cvData.personal.phone ? `<div>📞 ${cvData.personal.phone}</div>` : ''}
                    ${cvData.personal.address ? `<div>📍 ${cvData.personal.address}, ${cvData.personal.city}</div>` : ''}
                </div>
            </div>
        </div>

    ${cvData.summary ? `
    <div class="section">
        <div class="section-title">Summary</div>
        <p>${cvData.summary}</p>
    </div>
    ` : ''}

    ${cvData.experience.length > 0 ? `
    <div class="section">
        <div class="section-title">Experience</div>
        ${cvData.experience.map(exp => `
            <div class="experience-item">
                <div class="job-title">${exp.position}</div>
                <div class="company">${exp.company} | ${exp.location}</div>
                <div class="date">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</div>
                <p>${exp.description}</p>
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${cvData.education.length > 0 ? `
    <div class="section">
        <div class="section-title">Education</div>
        ${cvData.education.map(edu => `
            <div class="education-item">
                <div class="degree">${edu.degree}</div>
                <div class="school">${edu.school} | ${edu.location}</div>
                <div class="date">${edu.startDate} - ${edu.endDate}</div>
                ${edu.description ? `<p>${edu.description}</p>` : ''}
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${cvData.skills.length > 0 ? `
    <div class="section">
        <div class="section-title">Skills</div>
        <div class="skills">
            ${cvData.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
        </div>
    </div>
    ` : ''}

    ${cvData.languages.length > 0 ? `
    <div class="section">
        <div class="section-title">Languages</div>
        ${cvData.languages.map(lang => `
            <div><strong>${lang.language}</strong> - ${lang.proficiency}</div>
        `).join('')}
    </div>
    ` : ''}

    ${cvData.certifications.length > 0 ? `
    <div class="section">
        <div class="section-title">Certifications</div>
        ${cvData.certifications.map(cert => `
            <div class="experience-item">
                <div class="job-title">${cert.name}</div>
                <div class="company">${cert.issuer}</div>
                <div class="date">${cert.date}</div>
            </div>
        `).join('')}
    </div>
    ` : ''}
    </div>
</body>
</html>`;

    // Open in new window for printing
    const newWindow = window.open('', '_blank');
    if (newWindow) {
        newWindow.document.write(htmlContent);
        newWindow.document.close();
        newWindow.print();
    }
}