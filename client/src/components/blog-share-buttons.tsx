import { Linkedin, Printer, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface BlogShareButtonsProps {
  title: string;
  url?: string;
  excerpt?: string;
}

export default function BlogShareButtons({ title, url, excerpt }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const shareToLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
  };

  const printToPdf = () => {
    window.print();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={shareToLinkedIn}
        className="border-[var(--theme-border)] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
        data-testid="button-share-linkedin"
        title="Share to LinkedIn"
      >
        <Linkedin className="w-4 h-4 mr-1.5" />
        <span className="hidden sm:inline">Share</span>
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={printToPdf}
        className="border-[var(--theme-border)] text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-secondary)] transition-colors"
        data-testid="button-print-pdf"
        title="Print to PDF"
      >
        <Printer className="w-4 h-4 mr-1.5" />
        <span className="hidden sm:inline">PDF</span>
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={copyLink}
        className="border-[var(--theme-border)] text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-secondary)] transition-colors"
        data-testid="button-copy-link"
        title="Copy link"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-1.5 text-green-500" />
            <span className="hidden sm:inline text-green-500">Copied!</span>
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4 mr-1.5" />
            <span className="hidden sm:inline">Copy</span>
          </>
        )}
      </Button>
    </div>
  );
}
