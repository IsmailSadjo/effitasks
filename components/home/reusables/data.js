import image1 from "../../../public/images/features/ajouter-tache.png"
import image2 from "../../../public/images/features/modify.png"
import image4 from "../../../public/images/features/calendrier-test.png"
// import image3 from "../../../public/images/features/search.png"
// import image4 from "../../../public/images/features/calendar-view.png"
import { BsPencil } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

export const data = [
    {
        index: 0,
        title: "Ajouter une tâche",
        desc: "L'ajout d'une tâche est la base de toute Todo list. Saisissez simplement le titre, définissez la date et l'heure d'exécution, puis activez un rappel — 15 ou 30 minutes avant, selon vos besoins. Avec EFFITASKS, ajouter une tâche est rapide, intuitif et toujours accessible.",
        image: image1,
        icon: <FaPlusCircle />
    },
    {
        index: 1,
        title: "Modifier / Supprimer une tâche",
        desc: "Besoin de faire un ajustement ? Modifier une tâche dans EFFITASKS est tout aussi simple que de l'ajouter. Changez le titre, la date, l'heure ou le rappel en quelques secondes. Une tâche n'est plus d'actualité ? Supprimez-la en un clic, que ce soit une erreur ou un changement de programme, gardez une todo list claire et à jour",
        image: image2,
        icon: <div className="flex justify-start items-center gap-3"><BsPencil />{` / `}<FaTrash className="text-red-600"/></div>
    },
    {
        index: 2,
        title: "Rechercher une tâche",
        desc: "Vous avez beaucoup de tâches et besoin de retrouver une en particulier ? Grâce à la fonction de recherche d'EFFITASKS, trouvez instantanément ce que vous cherchez. Tapez un mot-clé, un titre ou une date, et accédez directement à la tâche concernée. Plus besoin de faire défiler toute la liste!",
        image: image1,
        icon: <FaSearch />
    },
    {
        index: 3,
        title: "Vue calendrier",
        desc: "Visualisez vos tâches autrement grâce à la vue calendrier d'EFFITASKS. En un clin d'œil, organisez votre semaine ou votre mois et repérez les journées chargées. Cette vue vous offre une meilleure perspective sur votre planning et facilite la planification à long terme.",
        image: image4,
        icon: <FaRegCalendarAlt />
    }
]