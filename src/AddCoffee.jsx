import App from "./App";

const AddCoffee = () => {

    const handleAddData = event => {
        
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        console.log(name, chef, supplier, taste, category, details, photo);
    }
    return (
        <div>
            <App></App>
            <p>this is addcoffee component</p>

            <div className="bg-slate-300 mt-20">
                <form onSubmit={handleAddData} className="grid grid-cols-2 gap-4 w-full p-3">
                    <input className="border-2 p-2" type="text" name="name" id="" placeholder="name" />
                    <input className="border-2 p-2" type="text" name="chef" id="" placeholder="chef" />
                    <input className="border-2 p-2" type="text" name="supplier" id="" placeholder="supplier" />
                    <input className="border-2 p-2" type="text" name="taste" id="" placeholder="taste" />
                    <input className="border-2 p-2" type="text" name="category" id="" placeholder="category" />
                    <input className="border-2 p-2" type="text" name="details" id="" placeholder="details" />
                    <input className="border-2 p-2 col-span-2" type="text" name="photo" id="" placeholder="Photo url" />
                    <input className="btn col-span-2" type="submit" name="" id="" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;