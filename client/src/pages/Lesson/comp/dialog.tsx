import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DeleteNoteDialog({ onConfirm }: { onConfirm: () => void }) {
  return (
    <DialogContent className="sm:max-w-md p-6 rounded-lg shadow-lg">
      <DialogHeader>
        <DialogTitle className="text-lg font-semibold">Please confirm</DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-gray-600 text-sm">
        Are you sure you want to delete your note?
      </DialogDescription>
      <DialogFooter className="flex justify-end gap-4 mt-4">
        <DialogClose asChild>
          <Button variant="outline" className="text-gray-700">Cancel</Button>
        </DialogClose>
        <Button
          onClick={onConfirm}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          OK
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
