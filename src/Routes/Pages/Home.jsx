import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import LatestNews from "../../components/LatestNews";
import LeftNavber from "../../components/Layout_component/LeftNavber";
import RightNavBar from "../../components/Layout_component/RightNavBar";
import NavBar from "../../components/NavBar";

const Home = () => {
    return (
        <div className="mx-5">
            <Header></Header>
            <section className="my-auto mt-5">
                <LatestNews></LatestNews>
            </section>
            <section className=""><NavBar></NavBar></section>

            <main className="grid grid-cols-12 pt-4 gap-4">
            <aside className="col-span-3"><LeftNavber></LeftNavber></aside>
            <section className="col-span-6"><Outlet></Outlet></section>
            <aside className="col-span-3"><RightNavBar></RightNavBar></aside>
            </main>
        </div>
    );
};

export default Home;