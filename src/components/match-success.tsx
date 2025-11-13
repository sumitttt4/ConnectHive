import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MatchSuccessProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  name: string;
  handle: string;
}

export function MatchSuccess({
  open,
  onOpenChange,
  name,
  handle,
}: MatchSuccessProps) {
  // Remove @ symbol if present
  const cleanHandle = handle.startsWith("@") ? handle.slice(1) : handle;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <div className="mb-4 flex items-center justify-center">
            <CheckCircle2 className="h-16 w-16 text-blue-600" />
          </div>
          <DialogTitle className="text-2xl font-semibold">
            It&apos;s a match!
          </DialogTitle>
          <DialogDescription className="text-base">
            You and {name} opted in. Connect on X to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Button
            className="w-full"
            asChild
            aria-label={`Connect with ${name} on X`}
          >
            <a
              href={`https://twitter.com/${cleanHandle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on X
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
