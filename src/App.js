import React, { useState, useEffect } from 'react'
import './App.css'
import Casa from './components/Casa'

const Tabuleiro = [
    [
        { peca: 'torre', cor: '#fff' },
        { peca: 'cavalo', cor: '#fff' },
        { peca: 'bispo', cor: '#fff' },
        { peca: 'rei', cor: '#fff' },
        { peca: 'rainha', cor: '#fff' },
        { peca: 'bispo', cor: '#fff' },
        { peca: 'cavalo', cor: '#fff' },
        { peca: 'torre', cor: '#fff' },
    ],
    [
        { peca: 'peao', cor: '#fff' },
        { peca: 'peao', cor: '#fff' },
        { peca: 'peao', cor: '#fff' },
        { peca: 'peao', cor: '#fff' },
        { peca: 'peao', cor: '#fff' },
        { peca: 'peao', cor: '#fff' },
        { peca: 'peao', cor: '#fff' },
        { peca: 'peao', cor: '#fff' },
    ],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [
        { peca: 'peao', cor: '#000' },
        { peca: 'peao', cor: '#000' },
        { peca: 'peao', cor: '#000' },
        { peca: 'peao', cor: '#000' },
        { peca: 'peao', cor: '#000' },
        { peca: 'peao', cor: '#000' },
        { peca: 'peao', cor: '#000' },
        { peca: 'peao', cor: '#000' },
    ],
    [
        { peca: 'torre', cor: '#000' },
        { peca: 'cavalo', cor: '#000' },
        { peca: 'bispo', cor: '#000' },
        { peca: 'rei', cor: '#000' },
        { peca: 'rainha', cor: '#000' },
        { peca: 'bispo', cor: '#000' },
        { peca: 'cavalo', cor: '#000' },
        { peca: 'torre', cor: '#000' },
    ],
]

const App = () => {
    const [tabuleiro, setTabuleiro] = useState(Tabuleiro)

    useEffect(() => {
        console.log(Tabuleiro)
    }, [])

    return (
        <div className="container">
            {tabuleiro.map((i, key) => (
                <Casa casa={key} key={key} props={i} />
            ))}
        </div>
    )
}

export default App
