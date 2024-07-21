import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

declare global {
  interface Window {
    MRP: any;
    $: any;
  }
}

const Player = () => {
    useEffect(() => {
        // Adiciona o script do MRP
        const script = document.createElement('script');
        script.src = "https://hosted.muses.org/mrp.js";
        script.async = true;
        document.body.appendChild(script);

        // Inicializa o player do MRP quando o script é carregado
        script.onload = () => {
            window.MRP.insert({
                'url': 'https://08.stmip.net:8668/;',
                'lang': 'pt',
                'codec': "mp3",
                'volume': 100,
                'autoplay': true,
                'forceHTML5': true,
                'jsevents': true,
                'buffering': 0,
                'title': "",
                'wmode': 'transparent',
                'skin': 'substream',
                'width': 180,
                'height': 30
            });
        };

        // Adiciona o script do SHOUTcast
        const shoutcastScript = document.createElement('script');
        shoutcastScript.src = "https://p.stmip.net/player/shoutcastInfo.js";
        shoutcastScript.async = true;
        document.body.appendChild(shoutcastScript);

        // Inicializa o SHOUTcast para obter informações sobre a música e o servidor
        shoutcastScript.onload = () => {
            window.$.SHOUTcast({
                host: '08.stmip.net',
                port: 8668,
                interval: 12000,
                stats: function () {
                    // Atualiza o título da música e do servidor
                    // document.getElementById('songtitle').textContent = this.get('songtitle');
                    // document.getElementById('servertitle').textContent = this.get('servertitle');
                }
            }).startStats();
        };

        // Remove os scripts quando o componente é desmontado
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(shoutcastScript);
        };
    }, []);

    return (
        <div className="container mx-auto py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                <div className="flex justify-center lg:justify-start">
                    {/* Placeholder para o player MRP */}
                    <div id="mrp_player" className="bg-gray-200 p-2 rounded-lg shadow-md">
                        {/* O player será inserido aqui pelo script */}
                    </div>
                </div>
                <div className="text-center text-white">
                    <div id="servertitle" className="text-xl font-bold">...</div>
                    <div id="songtitle" className="text-lg">...</div>
                </div>
                <div className="flex justify-center lg:justify-end space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Player;
