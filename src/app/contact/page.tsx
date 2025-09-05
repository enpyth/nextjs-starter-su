import Hero from '@/features/home/hero'
import ContactEmail from '@/components/form/contact-email'
import { Container } from '@mui/material'

export default function ContactPage() {
  const subjectOptions = [
    { value: 'enquiry', label: 'Enquiry' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' },
  ]
  return (
    <main className="flex-grow">
    <Hero imageSrc="/banner/banner-about.jpeg" title="Contact Us" />
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 max-w-6xl mx-auto">
        <ContactEmail subjectOptions={subjectOptions} />
      </div>
    </Container>
  </main>
  )
}