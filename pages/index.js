import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Card</h1>
            <div>
            <Link href="/build">
                <button>Create your page</button>
            </Link>
            </div>
        </div>
    )
}

export default Home;