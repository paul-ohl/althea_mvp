import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import PrestationsSelector from './benefit_form/prestations_selector';
import DateSelection from './benefit_form/date_selection';

export default function BenefitForm() {
  return (
    <form className="text-left space-y-5">
      <div>
        <label
          htmlFor="account-number"
          className="block text-sm/6 text-gray-900"
        >
          Trouver un bénéficiaire
        </label>
        <div className="mt-2 grid grid-cols-1">
          <input
            id="beneficiary-name"
            name="name"
            type="text"
            placeholder="Michelle Dumont"
            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 sm:text-sm/6"
          />
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-400 sm:size-4"
          />
        </div>
      </div>
      <hr />
      <PrestationsSelector />
      <hr />
      <DateSelection />
    </form>
  );
}
