import Link from 'next/link'

const notes = [
    { name: 'my-note'},
    { name: 'my-note2'},
    { name: 'my-note3'},
]


const swiperTwo = [
    {   id: 1,
        width: 390,
        height: 180,
        src: '/showcase/Guess-GU6973-32P-d000.jpg',
        description: 'syze dielli per djem dhe cucka',
        className: 'uppercase'
    },
    {   id: 2,
        width: 390,
        height: 180,
        src: '/showcase/Guess-GU7695-S-66B-d000.jpg',
        description: 'syze dielli per djem dhe cucka',
    },
    {   id: 3,
        width: 390,
        height: 180,
        src: '/showcase/Guess-GU3037-001-d000.jpg',
        description: 'syze dielli per djem dhe cucka',
    },
    {   id: 4,
        width: 390,
        height: 180,
        src: '/showcase/6531584_d2.jpg',
        description: 'syze dielli per djem dhe cucka',
    },
 
    
] 

export default function Note(){
    return <div>
    <h1>Notes Page</h1>
    {notes.map((note) => {
        return <div>
            <Link as={"/syzet/" + note.name} href="/syzet/[dielli]">
                <a>{note.name}</a>
            </Link>
        </div>
    })}
    </div>
}