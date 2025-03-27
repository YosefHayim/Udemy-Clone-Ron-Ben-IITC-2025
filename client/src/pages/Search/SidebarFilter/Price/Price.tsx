import Filter from '@/components/Filter/Filter';
import { prices } from '@/utils/price';
import { useState } from 'react';
import { useContext } from 'react';
import { filterContext } from '@/routes/AppRoutes';

const Price = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [filterData, setFilterData] = useContext(filterContext);

  return (
    <div>
      <Filter
        filterTitle={'Price'}
        filterItems={prices}
        chosenHeight={'h-[50px]'}
        display={display}
        setDisplay={setDisplay}
        useForSection={false}
        showLine={true}
        hideIcons={false}
      />
    </div>
  );
};

export default Price;
