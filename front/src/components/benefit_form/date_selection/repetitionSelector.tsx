import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';

const timeSpanOptions = [
  { name: 'Unique', available: true },
  { name: 'Hebdomadaire', available: true },
  { name: 'Mensuel', available: true },
  { name: 'Personnaliser', available: false },
];

function classNames(
  ...classes: (string | boolean | null | undefined)[]
): string {
  return classes.filter(Boolean).join(' ');
}

export default function RepetitionSelector() {
  const [mem, setMem] = useState(timeSpanOptions[0]);

  return (
    <fieldset aria-label="Récurence de la prestation">
      <div className="text-sm/6 font-medium text-gray-900">
        Récurence de la prestation
      </div>

      <RadioGroup
        value={mem}
        onChange={setMem}
        className="mt-2 grid grid-cols-4 gap-0"
      >
        {timeSpanOptions.map((option) => (
          <Radio
            key={option.name}
            value={option}
            disabled={!option.available}
            className={classNames(
              option.available
                ? 'cursor-pointer focus:outline-none'
                : 'cursor-not-allowed opacity-60',
              'flex items-center justify-center bg-white px-3 py-3 text-sm text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus])]:[&:not([data-checked])]:ring-inset',
            )}
          >
            {option.name}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
