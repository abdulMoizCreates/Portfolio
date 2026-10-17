import { useState } from 'react'
import SectionHead from './Section'
import { profile } from '../data'
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Input, ListItem, List, Spinner, Textarea, useToast } from './ui'
import { ArrowUpRight, Check, Copy, LocateFixed, Mail } from 'lucide-react'

const copyEmailStates = {
  idle: { label: 'Copy', icon: Copy },
  loading: { label: 'Copying', icon: null },
  copied: { label: 'Copied', icon: Check },
}

export default function Contact() {
  const toast = useToast()
  const [copyStatus, setCopyStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copyEmail = async () => {
    if (copyStatus !== 'idle') return
    setCopyStatus('loading')
    await new Promise((resolve) => setTimeout(resolve, 600))
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('copied')
      toast({ title: 'Email copied', description: profile.email })
      setTimeout(() => setCopyStatus('idle'), 2000)
    } catch {
      setCopyStatus('idle')
      toast({
        title: 'Could not copy',
        description: 'Your browser blocked clipboard access — email me directly instead.',
        variant: 'info',
      })
    }
  }

  const submit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const subject = encodeURIComponent(`Portfolio inquiry — ${name || 'hello'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    toast({ title: 'Opening your mail app…', description: 'Your message is ready to send.', variant: 'info' })
  }

  const state = copyEmailStates[copyStatus]

  return (
    <section id="contact" className="scroll-mt-16 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead index="04" title="Contact" />

        <p className="font-display max-w-3xl text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
          Have an idea?
          <br />
          <span className="text-teal-bright">Let&apos;s build it.</span>
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Reach me card */}
          <Card hover>
            <CardHeader>
              <CardTitle>
                <Mail className="h-4 w-4 text-teal-bright" aria-hidden="true" />
                Reach me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-ink/5">
                  <Mail className="h-4 w-4 text-faint" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{profile.email}</p>
                  <p className="text-xs text-faint">Email</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="min-w-28"
                >
                  {state.icon ? (
                    <state.icon className={`h-3.5 w-3.5 ${copyStatus === 'copied' ? 'text-teal-bright' : ''}`} aria-hidden="true" />
                  ) : (
                    <Spinner className="h-3.5 w-3.5" />
                  )}
                  {state.label}
                </Button>
              </div>

              <List>
                <ListItem
                  icon={LocateFixed}
                  title={profile.location}
                  note="Based in"
                />
                <ListItem
                  icon={ArrowUpRight}
                  title={profile.github.replace('https://', '')}
                  note="GitHub"
                  right={
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-faint transition-colors hover:text-teal-bright"
                    >
                      Open ↗
                    </a>
                  }
                />
                <ListItem
                  icon={ArrowUpRight}
                  title={profile.linkedin.replace('https://www.', '')}
                  note="LinkedIn"
                  right={
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-faint transition-colors hover:text-teal-bright"
                    >
                      Open ↗
                    </a>
                  }
                />
              </List>

              <Badge variant="accent">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-teal-bright" aria-hidden="true" />
                {profile.availability}
              </Badge>
            </CardContent>
          </Card>

          {/* Message form card — opens the visitor's mail app prefilled */}
          <Card hover>
            <CardHeader>
              <CardTitle>
                <Mail className="h-4 w-4 text-teal-bright" aria-hidden="true" />
                Or drop a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-faint">
                      Name
                    </span>
                    <Input
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-faint">
                      Email
                    </span>
                    <Input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </label>
                </div>
                <label className="block space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-faint">
                    Message
                  </span>
                  <Textarea
                    required
                    placeholder="Tell me about your idea…"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                </label>
                <Button type="submit" className="w-full">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
