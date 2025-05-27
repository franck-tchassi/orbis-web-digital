'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { ChevronRight, Mail, Calendar, FileText, CheckCircle} from 'lucide-react';
import { toast } from 'sonner';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  firstName: z.string().min(2, 'Minimum 2 caractères').max(50),
  lastName: z.string().min(2, 'Minimum 2 caractères').max(50),
  email: z.string().email('Email invalide'),
  projectDetails: z.string().min(8, 'Décrivez votre projet en détail (20 caractères minimum)'),
});


export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      if (!formRef.current) throw new Error('Form not initialized');

      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        dataVolume: data.dataVolume,
        projectDetails: data.projectDetails,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      if (result.status !== 200) throw new Error('Erreur lors de l\'envoi');

      toast.success('Votre demande a été envoyée avec succès !');
      setIsSubmitted(true);
      reset();
    } catch (error) {
      toast.error(`Erreur: ${error instanceof Error ? error.message : 'Une erreur est survenue'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="bg-green-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8" aria-hidden="true">
          <CheckCircle className="text-green-600 h-12 w-12" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Merci pour votre demande !</h2>
      </div>
    );
  }

  return (  
    <main className="max-w-6xl mx-auto px-4 py-32 "> {/* Augmentation du padding vertical */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Colonne gauche - Processus */}
        <article className="space-y-12"> {/* Plus d'espace entre les éléments */}
          <header className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Discutons de votre projet</h1>
          </header>

          <section className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-blue-50 p-3 rounded-full h-fit">
                <Mail className="text-blue-600 h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">1. Contact initial</h2>
                <p className="text-muted-foreground">
                  Après soumission du formulaire, notre équipe vous contactera sous 24h.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-purple-50 p-3 rounded-full h-fit">
                <FileText className="text-purple-600 h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">2. Proposition détaillée</h2>
                <p className="text-muted-foreground">
                  Nous préparerons une proposition technique et commerciale adaptée.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-green-50 p-3 rounded-full h-fit">
                <CheckCircle className="text-green-600 h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">3. Validation</h2>
                <p className="text-muted-foreground">
                  Après votre approbation, nous finaliserons les détails contractuels.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-50 p-3 rounded-full h-fit">
                <Calendar className="text-orange-600 h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">4. Développement</h2>
                <p className="text-muted-foreground">
                  Notre équipe commencera le développement selon le calendrier établi.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Colonne droite - Formulaire */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Demande de contact</CardTitle>
            <CardDescription>Remplissez ce formulaire pour un devis personnalisé</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    {...register('firstName')}
                    className="h-12"
                    placeholder="Votre prénom"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName.message?.toString()}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    {...register('lastName')}
                    className="h-12"
                    placeholder="Votre nom"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName.message?.toString()}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="h-12"
                  placeholder="pierre***@gmail.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message?.toString()}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDetails">Détails du projet *</Label>
                <Textarea
                  id="projectDetails"
                  {...register('projectDetails')}
                  className="min-h-[120px]"
                  placeholder="Décrivez votre projet ici"
                />
                {errors.projectDetails && (
                  <p className="text-sm text-red-500" role="alert">{errors.projectDetails.message?.toString()}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg transform cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out group"
                size="lg"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Envoi du formulaire en cours" : "Envoyer la demande de contact"}
                aria-live="polite"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                <ChevronRight 
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200 ease-in-out" 
                />
              </Button>

              <p className="text-sm text-muted-foreground">
                Nous traitons vos données conformément à notre{' '}
                <Link href="/privacy" className="underline hover:text-primary" aria-label="Lire notre Politique de confidentialité">
                  Politique de confidentialité
                </Link>.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}