import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Helmet from "react-helmet"

interface Student {
    name: string
    email: string
    number: number
}

const students: Student[] = [
    {
        name: "Tatiana Costa",
        email: "tp.costa@campus.fct.unl.pt",
        number: 46752
    },
    {
        name: "Ricardo Margalhau",
        email: "r.margalhau@campus.fct.unl.pt",
        number: 62241
    },
    {
        name: "Lucia Salvador",
        email: "l.salvador@campus.fct.unl.pt",
        number: 62309
    }
]

const IndexPage: React.FC = () => {
    const backdropImageSrc = 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'

    const studentCards = React.useMemo(() => {
        return students.map(st => (
            <div className="flex-1 bg-gray-800 rounded-md py-10 px-16">
                <h1 className="font-bold text-2xl">{st.name}</h1>
                <p>{emailToRepr(st.email)}</p>
                <p>Student n. {st.number}</p>
            </div>
        ))
    }, [])

    return (
        <main className="absolute w-full min-h-full bg-gray-900">
            <Helmet>
                <title>Eat & Share</title>
                <meta charSet="utf-8" />
            </Helmet>
            <div className="flex items-center justify-center bg-gray-900 text-gray-200 py-5 px-16 md:px-32 lg:px-72">
                <div className="flex-initial">
                    <h1 className="text-4xl font-bold">Eat & <span className="text-yellow-500">Share</span></h1>
                </div>
            </div>
            <div className="flex justify-center shadow-lg">
                <StaticImage src={backdropImageSrc} alt="food image" className="flex-1 max-h-96" />
            </div>
            <div className="flex flex-col text-gray-200 px-16 md:px-32 lg:px-72 mt-16 mb-16">
                <div className="flex-1 text-4xl font-bold"><span className="text-yellow-500">—</span> About us</div>
                <div className="flex-1 mt-5">
                    We are group 32 from lab class 4 of the 21/22 Person-Machine Interfaces class.
                    <div className="flex flex-col md:flex-row justify-center mt-16 space-y-5 md:space-y-0 md:space-x-5">
                        {studentCards}
                    </div>
                </div>
                <div className="flex-1 text-4xl font-bold mt-16"><span className="text-yellow-500">—</span> Reports</div>
                <div className="flex-1 mt-5">
                    Here you can find the up-to-date reports for each phase of our project.
                    <p className="text-xl">(Coming Soon)</p>
                </div>
                <div className="flex-1 text-4xl font-bold mt-16"><span className="text-yellow-500">—</span> Design</div>
                <div className="flex-1 mt-5">
                    The design process of the Eat & Share application can be found in this section.
                    <p className="text-xl">(Coming Soon)</p>
                </div>
            </div>
        </main>
    )
}

const emailToRepr = (email: string): string => email.replace('@', ' [at] ')

export default IndexPage
