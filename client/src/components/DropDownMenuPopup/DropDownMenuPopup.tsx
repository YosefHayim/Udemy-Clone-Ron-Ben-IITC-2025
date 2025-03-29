import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ReactNode } from 'react';

interface DropDownMenuProps {
  setState: (hover: boolean) => void;
  hoverState: boolean;
  children: ReactNode;
  extraCustomCss?: string;
}

export const DropdownMenuPopup: React.FC<DropDownMenuProps> = ({
  setState,
  hoverState,
  children,
  extraCustomCss,
}) => {
  return (
    <DropdownMenu open={hoverState} onOpenChange={(open) => setState(open)}>
      <DropdownMenuTrigger asChild>
        <button>Open Dropdown</button>
      </DropdownMenuTrigger>
      {children && (
        <DropdownMenuContent className={`${extraCustomCss}`}>{children}</DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};
