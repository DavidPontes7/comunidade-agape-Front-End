
import { useParams, Link } from 'react-router-dom';
import fakeEvents from '../../../data/Evento-Item/fakeEventos';

const EventDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const event = fakeEvents.find(eventItem => eventItem.id === parseInt(id));

    if (!event) {
        return <div className="text-center mt-12 text-gray-700">Evento não encontrado</div>;
    }

    return (
        <div className="container mx-auto py-8 px-4 md:px-8">
            <div className="flex justify-between items-center mb-4">
                <Link to="/eventos" className="text-blue-500 hover:underline">← Voltar para eventos</Link>
                <p className="text-gray-700">Organizado por {event.organizer} em {event.date}</p>
            </div>
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto object-cover mb-4 rounded-lg shadow-md"
                style={{ maxHeight: '150px', minHeight: '100px' }}
            />

            <div className="prose max-w-none text-gray-700">
                <p><strong>Local:</strong> {event.location}</p>
                <p>{event.description}</p>
            </div>
            <div className="mt-8 flex justify-between items-center">
                <Link to="/eventos" className="text-blue-500 hover:underline">← Voltar para eventos</Link>
                <p className="text-gray-700">Organizado por {event.organizer}</p>
            </div>
        </div>
    );
};

export default EventDetailPage;
