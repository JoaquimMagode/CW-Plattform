import jsPDF from 'jspdf';

export const generatePDF = (data) => {
  const doc = new jsPDF();
  const template = data.templateId || 'modern';

  // Common helpers
  const addText = (text, x, y, options = {}) => {
    doc.text(text, x, y, options);
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const setBrandColor = () => {
    doc.setTextColor(109, 84, 176); // #6d54b0
  };

  const setGreyColor = () => {
    doc.setTextColor(100, 100, 100);
  };

  const setBlackColor = () => {
    doc.setTextColor(0, 0, 0);
  };

  // Layout Implementations
  const renderModernLayout = () => {
    let yPos = 20;

    // Sidebar Background
    doc.setFillColor(245, 245, 245);
    doc.rect(0, 0, 70, 297, 'F');

    // Name & Title
    doc.setFontSize(24);
    setBrandColor();
    addText(data.personal.fullName || 'Nome Completo', 80, yPos);

    doc.setFontSize(14);
    setGreyColor();
    yPos += 10;
    addText(data.personal.title || 'Título Profissional', 80, yPos);

    // Sidebar Content (Contact & Skills)
    let sideY = 20;
    // Photo placeholder
    doc.setFillColor(200, 200, 200);
    doc.circle(35, 40, 25, 'F');
    sideY += 60;

    // Contact
    doc.setFontSize(12);
    setBrandColor();
    addText('CONTATO', 10, sideY);
    sideY += 8;

    doc.setFontSize(9);
    setBlackColor();
    const contactLines = [
      data.personal.email,
      data.personal.phone,
      data.personal.location,
      data.personal.country,
      data.personal.birthDate ? `Nasc: ${data.personal.birthDate}` : ''
    ].filter(Boolean);

    contactLines.forEach(line => {
      addText(line, 10, sideY);
      sideY += 6;
    });
    sideY += 10;

    // Skills Sidebar
    if (data.skills.length > 0) {
      doc.setFontSize(12);
      setBrandColor();
      addText('HABILIDADES', 10, sideY);
      sideY += 8;
      doc.setFontSize(9);
      setBlackColor();
      data.skills.forEach(skill => {
        addText(`• ${skill}`, 10, sideY);
        sideY += 6;
      });
    }

    // Main Content
    yPos += 20;

    // Summary
    if (data.summary) {
      doc.setFontSize(14);
      setBrandColor();
      addText('Resumo Profissional', 80, yPos);
      doc.setDrawColor(200, 200, 200);
      doc.line(80, yPos + 2, 190, yPos + 2);
      yPos += 10;

      doc.setFontSize(10);
      setBlackColor();
      const splitSummary = doc.splitTextToSize(data.summary, 110);
      doc.text(splitSummary, 80, yPos);
      yPos += splitSummary.length * 5 + 10;
    }

    // Experience
    if (data.experience.length > 0) {
      doc.setFontSize(14);
      setBrandColor();
      addText('Experiência', 80, yPos);
      doc.line(80, yPos + 2, 190, yPos + 2);
      yPos += 10;

      data.experience.forEach(exp => {
        doc.setFontSize(12);
        setBlackColor();
        doc.text(exp.position, 80, yPos);
        doc.setFontSize(10);
        setGreyColor();
        doc.text(`${exp.company} | ${exp.startDate} - ${exp.endDate}`, 80, yPos + 5);
        yPos += 10;

        if (exp.description) {
          setBlackColor();
          const splitDesc = doc.splitTextToSize(exp.description, 110);
          doc.text(splitDesc, 80, yPos);
          yPos += splitDesc.length * 5 + 5;
        } else {
          yPos += 5;
        }
      });
      yPos += 5;
    }

    // Education
    if (data.education.length > 0) {
      doc.setFontSize(14);
      setBrandColor();
      addText('Educação', 80, yPos);
      doc.line(80, yPos + 2, 190, yPos + 2);
      yPos += 10;

      data.education.forEach(edu => {
        doc.setFontSize(12);
        setBlackColor();
        doc.text(edu.school, 80, yPos);
        doc.setFontSize(10);
        setGreyColor();
        doc.text(`${edu.degree} | ${edu.startDate} - ${edu.endDate}`, 80, yPos + 5);
        yPos += 15;
      });
    }
  };

  const renderClassicLayout = () => {
    let yPos = 20;

    // Header Background
    doc.setFillColor(109, 84, 176);
    doc.rect(0, 0, 210, 40, 'F');

    // Name & Title (White)
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26);
    addText(data.personal.fullName || 'Nome Completo', 20, 25);
    doc.setFontSize(14);
    addText(data.personal.title || 'Título Profissional', 20, 35);

    yPos = 50;

    // Contact Row
    doc.setFontSize(10);
    setGreyColor();
    const contactInfo = [
      data.personal.email,
      data.personal.phone,
      data.personal.location,
      data.personal.country
    ].filter(Boolean).join('  •  ');
    addText(contactInfo, 20, yPos);
    yPos += 15;

    // Helper for sections
    const renderSection = (title, items, renderItem) => {
      if (!items || items.length === 0) return;

      doc.setFontSize(16);
      setBrandColor();
      addText(title.toUpperCase(), 20, yPos);
      doc.setDrawColor(109, 84, 176);
      doc.line(20, yPos + 2, 190, yPos + 2);
      yPos += 10;

      items.forEach(item => {
        renderItem(item);
      });
      yPos += 5;
    };

    // Summary
    if (data.summary) {
      doc.setFontSize(16);
      setBrandColor();
      addText('PERFIL', 20, yPos);
      doc.line(20, yPos + 2, 190, yPos + 2);
      yPos += 10;
      doc.setFontSize(10);
      setBlackColor();
      const splitSummary = doc.splitTextToSize(data.summary, 170);
      doc.text(splitSummary, 20, yPos);
      yPos += splitSummary.length * 5 + 10;
    }

    // Experience
    renderSection('EXPERIÊNCIA', data.experience, (exp) => {
      doc.setFontSize(12);
      setBlackColor();
      doc.text(exp.position, 20, yPos);
      doc.text(exp.startDate + ' - ' + exp.endDate, 150, yPos, { align: 'right' });

      yPos += 5;
      doc.setFontSize(11);
      setBrandColor();
      doc.text(exp.company, 20, yPos);

      yPos += 6;
      if (exp.description) {
        doc.setFontSize(10);
        setBlackColor();
        const splitDesc = doc.splitTextToSize(exp.description, 170);
        doc.text(splitDesc, 20, yPos);
        yPos += splitDesc.length * 5 + 5;
      } else {
        yPos += 5;
      }
    });

    // Education
    renderSection('EDUCAÇÃO', data.education, (edu) => {
      doc.setFontSize(12);
      setBlackColor();
      doc.text(edu.school, 20, yPos);
      doc.text(edu.startDate + ' - ' + edu.endDate, 150, yPos, { align: 'right' });
      yPos += 5;
      doc.setFontSize(10);
      setGreyColor();
      doc.text(edu.degree, 20, yPos);
      yPos += 10;
    });

    // Skills
    if (data.skills.length > 0) {
      doc.setFontSize(16);
      setBrandColor();
      addText('COMPETÊNCIAS', 20, yPos);
      doc.line(20, yPos + 2, 190, yPos + 2);
      yPos += 10;
      doc.setFontSize(10);
      setBlackColor();
      const skillsStr = data.skills.join('  •  ');
      const splitSkills = doc.splitTextToSize(skillsStr, 170);
      doc.text(splitSkills, 20, yPos);
    }
  };

  const renderMinimalLayout = () => {
    let yPos = 20;

    // Centered Header
    doc.setFontSize(28);
    setBlackColor();
    doc.text(data.personal.fullName || 'Nome Completo', 105, yPos, { align: 'center' });
    yPos += 10;

    doc.setFontSize(12);
    setBrandColor();
    doc.text((data.personal.title || 'Título').toUpperCase(), 105, yPos, { align: 'center' });
    yPos += 10;

    doc.setFontSize(9);
    setGreyColor();
    const contactInfo = [
      data.personal.email,
      data.personal.phone,
      data.personal.location
    ].filter(Boolean).join(' | ');
    doc.text(contactInfo, 105, yPos, { align: 'center' });
    yPos += 20;

    // Content
    const renderSection = (title) => {
      doc.setFontSize(12);
      setBlackColor();
      doc.setFont(undefined, 'bold');
      doc.text(title.toUpperCase(), 20, yPos);
      doc.setFont(undefined, 'normal');
      yPos += 8;
    };

    if (data.summary) {
      renderSection('Resumo');
      doc.setFontSize(10);
      const splitSummary = doc.splitTextToSize(data.summary, 170);
      doc.text(splitSummary, 20, yPos);
      yPos += splitSummary.length * 5 + 10;
    }

    if (data.experience.length > 0) {
      renderSection('Experiência');
      data.experience.forEach(exp => {
        doc.setFontSize(11);
        doc.text(exp.position, 20, yPos);
        doc.setFontSize(9);
        setGreyColor();
        doc.text(`${exp.company} | ${exp.startDate} - ${exp.endDate}`, 20, yPos + 5);
        setBlackColor();
        yPos += 10;
        if (exp.description) {
          doc.setFontSize(10);
          const splitDesc = doc.splitTextToSize(exp.description, 170);
          doc.text(splitDesc, 20, yPos);
          yPos += splitDesc.length * 5 + 5;
        } else {
          yPos += 5;
        }
      });
      yPos += 5;
    }

    if (data.education.length > 0) {
      renderSection('Educação');
      data.education.forEach(edu => {
        doc.setFontSize(11);
        doc.text(edu.school, 20, yPos);
        doc.setFontSize(9);
        setGreyColor();
        doc.text(`${edu.degree} | ${edu.startDate} - ${edu.endDate}`, 20, yPos + 5);
        setBlackColor();
        yPos += 12;
      });
    }

    if (data.skills.length > 0) {
      renderSection('Habilidades');
      doc.setFontSize(10);
      const skillsStr = data.skills.join(', ');
      const splitSkills = doc.splitTextToSize(skillsStr, 170);
      doc.text(splitSkills, 20, yPos);
    }
  };

  // Switcher
  switch (template) {
    case 'classic':
      renderClassicLayout();
      break;
    case 'minimal':
      renderMinimalLayout();
      break;
    case 'bold':
      renderClassicLayout(); // Reuse classic for now, can customize later
      break;
    case 'professional':
      renderModernLayout(); // Reuse modern for now
      break;
    case 'modern':
    default:
      renderModernLayout();
      break;
  }

  doc.save(`curriculo-${template}.pdf`);
};
