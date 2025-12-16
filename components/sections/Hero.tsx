import Container from "../layout/Container";

export default function Hero() {
    return (
        <section className="py-32">
            <Container> 
                <h1 className="text-5xl font-bold text-center">
                    Welcome to Our Website
                </h1>
                <p className="mt-4 text-xl text-center text-gray-600">
                    We provide the best services to help you succeed.
                </p>    
            </Container>
        </section>
    );
}