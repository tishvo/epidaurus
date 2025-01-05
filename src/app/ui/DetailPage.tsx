import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { DetailData } from "@/lib/types";

function Houses({ defaultValue }: { defaultValue: string | undefined }) {
  return (
    <RadioGroup defaultValue={defaultValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Gryffindor" id="r1" />
        <Label htmlFor="r1">Gryffindor</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Hufflepuff" id="r2" />
        <Label htmlFor="r2">Hufflepuff</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Ravenclaw" id="r3" />
        <Label htmlFor="r3">Ravenclaw</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Slytherin" id="r3" />
        <Label htmlFor="r4">Slytherin</Label>
      </div>
    </RadioGroup>
  );
}

export function Modal({
  trigger,
  data,
}: {
  trigger: ReactNode;
  data: DetailData | undefined;
}) {
  const onSaveClick = () => {
    console.log("Detail modal - Save button clicked");
  };

  const onCancelClick = () => {
    console.log("Detail modal - Cancel button clicked");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      {data ? (
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Information</DialogTitle>
          </DialogHeader>
          <DialogDescription />
          <div className="inline-block">
            <div className="inline-grid grid-cols-4 pb-2">
              <div className="self-center">Name</div>
              <Input className="col-span-2" defaultValue={data?.Name} />
            </div>
            <div className="inline-grid grid-cols-4 pb-2">
              <div className="self-center">Age</div>
              <Input className="col-span-2" defaultValue={data?.Age} />
            </div>
            <div className="inline-grid grid-cols-4 pb-2">
              <div className="self-center">DOB</div>
              <Input className="col-span-2" defaultValue={data?.DOB} />
              <CalendarDays className="ml-1 mt-1" />
            </div>
            <div className="inline-grid grid-cols-4 pt-2 pb-4">
              <div>House</div>
              <Houses defaultValue={data?.House} />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button className="bg-blue-100" onClick={onSaveClick} type="button" variant="secondary">
                Save
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={onCancelClick} type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
