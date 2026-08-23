
function Main(){
     function handleSubmit(e) {
        e.preventDefault();
        alert("Submitted successfully");
        e.target.reset();
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}
export default Main;