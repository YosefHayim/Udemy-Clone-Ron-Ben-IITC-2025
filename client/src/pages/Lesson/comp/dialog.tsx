import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function DeleteNoteDialog({ onConfirm }: { onConfirm: () => void }) {
  return (
    <DialogContent className="rounded-lg p-6 shadow-lg sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-lg font-semibold">Please confirm</DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-sm text-gray-600">
        Are you sure you want to delete your note?
      </DialogDescription>
      <DialogFooter className="mt-4 flex justify-end gap-4">
        <DialogClose asChild>
          <Button variant="outline" className="text-gray-700">
            Cancel
          </Button>
        </DialogClose>
        <Button
          onClick={onConfirm}
          className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
        >
          OK
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
