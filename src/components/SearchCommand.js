import { Dialog, Combobox, Transition } from "@headlessui/react";
import { SearchIcon } from '@heroicons/react/outline';
import {useState, useEffect, Fragment} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";

const CommandPalette = ({ users }) => {
    let [isOpen, setIsOpen] = useState(false)
    let [query, setQuery] = useState('')

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
                setIsOpen(!isOpen)
            }
        }
        window.addEventListener("keydown", onKeyDown)
        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen])

    const filteredUsers = query ? users.filter(user => user.first_name.toLowerCase().includes(query.toLowerCase()))
        : {}

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
                onClose={setIsOpen}>
                <Transition.Child
                    enter="duration-300 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-200 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-50/75" />
                </Transition.Child>

                <Transition.Child
                    enter="duration-300 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">

                    <Combobox
                        as="div"
                        className="bg-white max-w-lg mx-auto relative rounded-xl shadow-2xl ring-1 ring-black/5 divide-y divide-gray-100 overflow-hidden"
                        onChange={() => {
                            setIsOpen(false)
                        }} value="">

                        <div className="flex items-center px-4">
                            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />

                            <Combobox.Input
                                placeholder="Search..."
                                className="h-12 w-full border-0 bg-transparent ring-0 focus:ring-transparent focus:ring-0 text-sm text-gray-800 placeholder-gray-400"
                                onChange={(event) => setQuery(event.target.value)} />
                        </div>
                        {filteredUsers.length > 0 && (
                            <Combobox.Options static className="py-4 text-sm max-h-96 overflow-y-auto">
                                {filteredUsers.map(user => (
                                    <Combobox.Option key={user.id} value={user}>
                                        {({ active}) => (
                                            <div className={`px-4 py-2 space-x-1 ${active ? 'bg-indigo-600' : 'bg-white'}`} >
                                                <span className={`font-medium ${active ? 'text-white' : 'text-gray-900'}`}>{user.first_name}</span>
                                                <span className={`${active ? 'text-indigo-200' : 'text-gray-400'}`}>{user.gender}</span>
                                            </div>
                                        )}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        )}
                        {query && filteredUsers.length === 0  && (
                            <p className="p-4 text-sm text-gray-500">No results found</p>
                        )}
                    </Combobox>
                </Transition.Child>

            </Dialog>
        </Transition.Root>
    )
}

export default CommandPalette;