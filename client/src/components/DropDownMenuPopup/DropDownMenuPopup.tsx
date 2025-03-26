import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ReactNode } from 'react';

interface DropDownMenuProps {
  setState: boolean;
  clickState: (clicked: boolean) => void;
  children: ReactNode;
  extraCustomCss?: string;
  triggerEvent?: 'click' | 'hover'; // Add a prop for the trigger event
}

export const DropdownMenuPopup: React.FC<DropDownMenuProps> = ({
  setState,
  clickState,
  children,
  extraCustomCss,
  triggerEvent = 'click',
}) => {
  return (
    <DropdownMenu
      open={setState}
      onOpenChange={(open) => clickState(open)}
      modal={triggerEvent === 'click'}
    >
      <DropdownMenuTrigger
        asChild
        onMouseEnter={triggerEvent === 'hover' ? () => clickState(true) : undefined}
        onMouseLeave={triggerEvent === 'hover' ? () => clickState(false) : undefined}
      ></DropdownMenuTrigger>
      {children && (
        <DropdownMenuContent className={`${extraCustomCss}`}>{children}</DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};
