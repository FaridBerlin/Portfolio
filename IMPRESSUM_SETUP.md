# Impressum Setup Instructions

## ✅ What Has Been Done

I've created a complete Impressum page that complies with German law (TMG § 5). The page includes:

1. **Created `/src/pages/Impressum.jsx`** - A dedicated legal disclosure page
2. **Updated `/src/App.jsx`** - Added routing for `/impressum`
3. **Updated `/src/components/Footer.jsx`** - Added link to Impressum in footer
4. **Updated `/src/components/ContactSection.jsx`** - Made contact info minimal/hidden while keeping it technically present

## ⚠️ IMPORTANT: You MUST Update These Fields

Before deploying your site, you **MUST** replace the placeholder information in `/src/pages/Impressum.jsx`:

### 1. Phone Number (Line ~27)

```jsx
// REPLACE THIS:
<a href="tel:+491234567890">+49 (0) 123 456 7890</a>
// WITH YOUR ACTUAL GERMAN PHONE NUMBER
```

### 2. Full Physical Address (Line ~42)

```jsx
// REPLACE THIS:
<p className="text-muted-foreground">
  Farid Hima
  <br />
  [Your Street Name and Number]
  <br />
  12045 Berlin
  <br />
  Germany
</p>
// WITH YOUR COMPLETE ADDRESS
// Example:
// Farid Hima
// Musterstraße 123
// 12045 Berlin
// Germany
```

## 📋 Legal Requirements Checklist

Your Impressum page now includes all required elements:

- ✅ Full legal name (Farid Hima)
- ⚠️ Physical address (YOU MUST ADD YOUR FULL ADDRESS)
- ✅ Email address (farid.hima@dci-student.org)
- ⚠️ Phone number (YOU MUST ADD YOUR REAL PHONE NUMBER)
- ✅ Responsible for content (§ 55 Abs. 2 RStV)
- ✅ Disclaimer (Haftungsausschluss)
- ✅ Copyright notice (Urheberrecht)
- ✅ Data protection statement (Datenschutz)
- ✅ EU dispute resolution link

## 🔗 How to Access

- The Impressum page is accessible at: `yourdomain.com/impressum`
- There's a link in the footer: "Impressum"
- The page is separate from your Contact page

## 📱 Contact Section Changes

The Contact section now:

- Shows "Contact via form below" instead of your email
- Shows only "Berlin, Germany" instead of full address
- Has a tiny, nearly invisible section with actual details (for legal compliance)
- Removed the phone number section completely from public view

## 🚀 Next Steps

1. Open `/src/pages/Impressum.jsx`
2. Replace `[Your Street Name and Number]` with your actual street address
3. Replace `+49 (0) 123 456 7890` with your actual phone number
4. Test the page by running `npm run dev` and navigating to `/impressum`
5. Deploy your changes

## ⚖️ Legal Notes

- The Impressum MUST be easily accessible from every page (it's in your footer ✅)
- The information MUST be current and accurate
- You CANNOT use a P.O. Box - it must be your actual physical address
- The phone number is highly recommended for "quick electronic contact"
- Keep the page updated if your contact information changes

## 🇩🇪 Why This Matters

German law (Telemediengesetz §5) requires all websites with commercial content or those operated from Germany to have an Impressum. Failure to comply can result in:

- Warnings (Abmahnungen)
- Fines up to €50,000
- Legal action from competitors or consumer protection agencies

Your Impressum is now properly structured and compliant - just add your real contact details!
