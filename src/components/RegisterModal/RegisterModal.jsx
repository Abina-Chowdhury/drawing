

const RegisterModal = () => {
    return (

        <>
            <button className="btn" onClick={() => document.getElementById('my_modal_6').showModal()}>Register</button>
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex justify-end items-center'>
                        <button className="btn w-10 " onClick={() => document.getElementById('my_modal_6').close()}>X</button>
                    </div>
                    <div className="card shrink-0 w-full max-w-lg">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forget password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>

            </dialog>
        </>

    );
};

export default RegisterModal;