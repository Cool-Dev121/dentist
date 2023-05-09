import { useTranslation } from 'react-i18next';

export default function ChangeLang() {
    const { i18n } = useTranslation();

    const changelng = (e) => {

        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className="absolute w-1/3 lg:w-36">
            <select id="underline_select" class="block py-2.5 px-3 mx-2 my-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" onChange={changelng}>
                <option selected>Choose a language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="es">Spanish</option>
                <option value="pt">Portuguese</option>
            </select>
        </div>

    )
}