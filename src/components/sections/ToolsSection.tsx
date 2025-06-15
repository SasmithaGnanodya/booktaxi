
'use client';

import Section from '@/components/ui/Section';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Clapperboard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const toolDetails = {
  title: 'Video Gen Helper',
  description: 'Enhance your prompts for AI video generation with this utility.',
  Icon: Clapperboard,
  url: 'https://ceylonar-prompt-enhancer.vercel.app/',
};

export default function ToolsSection() {
  return (
    <Section id="tools" className="bg-card/20"> {/* Consistent with other sections like ContactSection */}
      <ScrollAnimationWrapper>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-foreground text-shadow-md">
          Explore Our <span className="text-accent">Tools</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed text-shadow">
          Discover utility tools designed by CEYLONAR to streamline your creative and development workflows.
        </p>
      </ScrollAnimationWrapper>
      
      <div className="flex justify-center">
        <ScrollAnimationWrapper className="w-full max-w-md" style={{ transitionDelay: `100ms` }}>
          <Card className="group h-full flex flex-col bg-card text-card-foreground shadow-xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] border-transparent hover:border-primary/30">
            <CardHeader className="items-center text-center pt-8 pb-4">
              <div className="p-5 bg-primary/10 rounded-full mb-6 inline-block ring-4 ring-primary/20 group-hover:ring-accent/30 transition-all duration-300">
                <toolDetails.Icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <CardTitle className="text-3xl font-bold text-shadow-md">{toolDetails.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col items-center text-center pb-8 px-6">
              <CardDescription className="text-muted-foreground text-md leading-relaxed text-shadow mb-8 flex-grow">
                {toolDetails.description}
              </CardDescription>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 shadow-lg transform hover:scale-105 transition-transform duration-300 mt-auto">
                <Link href={toolDetails.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${toolDetails.title}`}>
                  Visit Tool <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </Section>
  );
}
