"use client"

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { ContactFormData } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [state, handleSubmit] = useForm("xxxxxxxx") // Replace with your Formspree project ID
  const [success, setSuccess] = useState(false)

  const handleSuccess = () => {
    setSuccess(true)
  }

  if (state.succeeded) {
    return (
      <div className="rounded-md bg-green-50 p-4 text-sm text-green-700">
        Thank you for your message! We will get back to you soon.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      {state.errors && state.errors.length > 0 && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
          {state.errors.map((error) => (
            <p key={error.field}>{error.message}</p>
          ))}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 shadow-sm focus:border-[1px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 shadow-sm focus:border-[1px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className={cn(
            'w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white dark:text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
            state.submitting && 'cursor-not-allowed opacity-50'
          )}
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
