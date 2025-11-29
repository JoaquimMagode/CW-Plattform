# CV Builder - Professional Resume Creator

A modern, professional CV/Resume builder web application that allows users to create beautiful resumes and download them as high-quality PDFs.

## Features

✨ **4 Professional Templates**
- **Modern**: Sidebar layout with photo and color accents
- **Classic**: Traditional header with formal design
- **Minimal**: Clean centered layout with subtle styling
- **Bold**: Creative two-column layout with color blocks

📝 **Comprehensive Sections**
- Personal Information (with photo upload)
- Professional Summary
- Work Experience
- Education
- Skills
- Languages
- Certifications

🎨 **Premium Design**
- Brand colors: Lilac (#6d54b0) and Grey (#e7e7e7)
- Modern, responsive UI
- Smooth animations and transitions
- Professional typography

📄 **High-Quality PDF Export**
- Professional PDF generation using @react-pdf/renderer
- No watermarks
- Print-ready quality
- ATS-friendly formatting

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19
- **Styling**: Tailwind CSS 4
- **PDF Generation**: @react-pdf/renderer
- **File Upload**: react-dropzone
- **Icons**: lucide-react
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd cv-builder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm run start
```

## Usage

1. **Choose a Template**: Select from 4 professional CV templates
2. **Fill in Your Information**: Complete the 8-step wizard with your details
3. **Upload Photo** (Optional): Drag & drop or click to upload your profile photo
4. **Download PDF**: Click "Download CV" to get your professional resume

## Project Structure

```
cv-builder/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── wizard/
│   │   └── StepWizard.tsx       # Main wizard component
│   ├── steps/
│   │   ├── TemplateSelector.tsx
│   │   ├── PersonalInfo.tsx
│   │   ├── Summary.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Languages.tsx
│   │   └── Certifications.tsx
│   └── pdf/
│       ├── ModernTemplate.tsx
│       ├── ClassicTemplate.tsx
│       ├── MinimalTemplate.tsx
│       └── BoldTemplate.tsx
├── lib/
│   ├── types.ts                 # TypeScript interfaces
│   ├── context/
│   │   └── CVContext.tsx        # State management
│   └── utils/
│       └── generatePDF.ts       # PDF generation logic
└── public/
    └── templates/               # Template preview images
```

## Customization

### Adding New Templates

1. Create a new template component in `components/pdf/`
2. Define styles using @react-pdf/renderer StyleSheet
3. Add template to `lib/utils/generatePDF.ts`
4. Update template selector in `components/steps/TemplateSelector.tsx`

### Changing Brand Colors

Edit the colors in `app/globals.css`:
```css
--color-brand-lilac: #6d54b0;
--color-brand-grey: #e7e7e7;
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Other Platforms

The application is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any Node.js hosting platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ using Next.js and React**
