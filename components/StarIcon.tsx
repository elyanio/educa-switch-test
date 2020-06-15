import React from 'react'

interface Props {
    width?: number;
    height?: number;
}

export const StarIcon = ({ width = 24, height = 24 }: Props) => {
    return (
        <svg xmlnsXlink="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 214.049 194.258">
            <defs>
                <filter id="Trazado_6136" x="2.998" y="0" width="208.053" height="188.258" filterUnits="userSpaceOnUse">
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" result="blur" />
                    <feFlood floodOpacity="0.302" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#e5e5e5" />
                    <stop offset="1" stopColor="#8f8f8f" />
                </linearGradient>
                <filter id="Sustracción_97" x="0" y="0" width="214.049" height="194.258" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" result="blur-2" />
                    <feFlood floodOpacity="0.302" />
                    <feComposite operator="in" in2="blur-2" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Grupo_3317" data-name="Grupo 3317" transform="translate(-1051.502 -551.5)">
                <g id="Grupo_3309" data-name="Grupo 3309" transform="translate(1056 552)">
                    <g id="Grupo_3308" data-name="Grupo 3308" transform="translate(0 0)">
                        <g id="Grupo_3307" data-name="Grupo 3307">
                            <g transform="matrix(1, 0, 0, 1, -4.5, -0.5)" filter="url(#Trazado_6136)">
                                <path id="Trazado_6136-2" data-name="Trazado 6136" d="M1002.9,1893.346s18.724-52.506,35.371-52.506,31.215,52.506,31.215,52.506,67.959-1.94,70.006,12.951-50.223,52.11-50.223,52.11,17.5,58.212,6.469,66.583-57.466-33.482-57.466-33.482-46.4,40.711-57.436,33.482,2.283-69.247,2.283-69.247-51.221-34.556-48.517-49.447S1002.9,1893.346,1002.9,1893.346Z" transform="translate(-929.99 -1840.34)" fill="#c9c9c9" />
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Grupo_3310" data-name="Grupo 3310" transform="translate(1056.001 552)">
                    <g id="Grupo_3306" data-name="Grupo 3306" transform="translate(27.882 25.55)">
                        <g id="Grupo_3219" data-name="Grupo 3219" transform="translate(0 0)">
                            <g id="Grupo_164" data-name="Grupo 164" transform="translate(0 0)">
                                <path id="Trazado_38" data-name="Trazado 38" d="M979.826,1871.2s21.291-33.947,27.669-34.128,26.243,34.128,26.243,34.128,51.991,8.257,52.927,12.86-35.616,41.548-35.616,41.548,6.2,44.387,0,48.968-43.554-19.785-43.554-19.785-37.74,25.107-43,22.258-3.957-51.441-3.957-51.441-29.584-41.035-28.194-45.5S979.826,1871.2,979.826,1871.2Z" transform="translate(-932.295 -1837.07)" fill="url(#linear-gradient)" />
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -4.5, -0.5)" filter="url(#Sustracción_97)">
                        <path id="Sustracción_97-2" data-name="Sustracción 97" d="M157.414,185.258h-.006c-7.887,0-22.049-9.4-32.541-17.294-11.2-8.421-20.7-16.934-21.1-17.292l-.057.053c-1.727,1.5-10.871,9.374-21.379,17.117-10.631,7.833-24.922,17.171-32.635,17.172a6.045,6.045,0,0,1-3.361-.861c-2.518-1.648-3.965-6.314-4.3-13.868a151.073,151.073,0,0,1,1.3-23.465c1.92-16.173,5.244-31.766,5.275-31.914l-.047-.03c-2.219-1.512-13.863-9.542-25.223-19.109a136.641,136.641,0,0,1-16.807-16.3c-4.889-5.9-7.055-10.61-6.439-14C2.244,53.694,43.516,52.423,61.16,52.423c4.3,0,7.123.079,7.24.082l.012-.035A249.244,249.244,0,0,1,79.848,26.252,101.424,101.424,0,0,1,91.225,8.2C95.756,2.76,99.977,0,103.771,0s7.8,2.76,11.9,8.2a91.283,91.283,0,0,1,9.949,18.049,227.513,227.513,0,0,1,9.363,26.253c.012,0,.078,0,.189-.007,2.268-.05,4.727-.075,7.307-.075,18.256,0,60.893,1.271,62.508,13.041.469,3.394-1.881,8.247-6.979,14.422A155.48,155.48,0,0,1,180.654,97.1c-12.443,10.848-25.33,20.083-25.873,20.471l.02.07c.748,2.541,4.631,15.936,7.346,30.082a134.207,134.207,0,0,1,2.742,22.494c.1,7.337-1.127,12.025-3.645,13.934A6.214,6.214,0,0,1,157.414,185.258Zm-54.346-52.245,0,0c.26.219,25.848,21.9,34.693,21.9a3.22,3.22,0,0,0,1.955-.537c6.107-4.507-4.02-42.09-4.123-42.469.332-.288,32.965-28.654,32.037-33.237-.93-4.554-45.736-8.224-46.189-8.26-.119-.337-11.988-33.491-18.322-33.491h-.053c-6.346.181-20.49,33.157-20.633,33.49-.445.038-44.117,3.836-45.484,8.26-1.377,4.4,30.617,31.27,30.939,31.54-.068.415-6.627,41.363-1.455,44.167a2.336,2.336,0,0,0,1.109.233c7.391,0,34.377-20.71,35.521-21.592Z" transform="translate(4.5 1.5)" fill="#c9c9c9" />
                    </g>
                </g>
            </g>
        </svg>
    )
}