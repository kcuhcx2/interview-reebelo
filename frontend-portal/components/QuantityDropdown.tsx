import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

type QuantityDropdownProps = {
    numberOfAvailableProducts: number;
    onConfirm: (quantity: number) => void;
}

export function QuantityDropdown(props: QuantityDropdownProps) {
    const {numberOfAvailableProducts, onConfirm} = props;
    const productsList = Array.from({length: numberOfAvailableProducts}, (_, i) => i + 1);
    const [selected, setSelected] = useState(productsList[0])

    return (
    <div className={'flex flex-col w-full'}>
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
            <>
                <div className="relative mt-2">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                    <span className="ml-3 block truncate">{selected}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </Listbox.Button>

                <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {productsList.map((quantity) => (
                        <Listbox.Option
                        key={quantity}
                        className={({ active }) =>
                            classNames(
                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                        }
                        value={quantity}
                        >
                        {({ selected, active }) => (
                            <>
                            <div className="flex items-center">
                                <span
                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                {quantity}
                                </span>
                            </div>

                            {selected ? (
                                <span
                                className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                                >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                    ))}
                    </Listbox.Options>
                </Transition>
                </div>
            </>
            )}
        </Listbox>
        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 sm:mt-0 sm:w-auto"
            onClick={() => onConfirm(selected)}
        >Buy</button>
    </div>
    )
}
    

