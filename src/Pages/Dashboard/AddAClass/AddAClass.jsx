import React from "react";
import { useForm } from "react-hook-form";
import "./AddAClass.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_img_upload_token;


const AddAClass = () => {
  const { user } = useAuth();
  console.log(user.displayName);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { className, price, seats } = data;
          const { displayName, email, photoURL } = user;

          const newClass = {
            className,
            price: parseFloat(price),
            displayName,
            email,
            photoURL,
            seats,
            image: imgURL,
            status: "pending",
          };

          axiosSecure.post("/addClass", newClass).then((response) => {
            console.log("A new class added", response.data);
            if (response.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${className}  has been added`,
                showConfirmButton: false,
                timer: 1500
              })
            }
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold">Add a New Class</h2>

      <div className="bg-img rounded-lg md:p-10 w-full mx-auto px-10 ms-10 shadow-md mt-5 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-5 md:w-[992px] mx-auto bg-sky-600/40 rounded-lg"
        >
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("className", { required: true })}
              className="input input-bordered input-info w-full"
            />
          </div>
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Image</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered file-input-info w-full"
              />
              {errors.image?.type === "required" && (
                <p className="text-red-600 mt-2" role="alert">
                  insert image
                </p>
              )}
            </div>

        

          <div className="flex gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Instructor Name</span>
              </label>
              <input
                type="text"
                defaultValue={user.displayName}
                {...register("displayName", { required: true })}
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Instructor email</span>
              </label>
              <input
              defaultValue={user.email}
                type="email"
                
                {...register("email", { required: true })}
                className="input input-bordered input-info w-full"
              />
            </div>

          
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Available Seats</span>
            </label>
            <input
              {...register("seats", { required: true })}
              className="input input-bordered input-info w-full"
              placeholder="seats available"
              type="number"
            ></input>
            {errors.description?.type === "required" && (
              <p className="text-red-600" role="alert">
                this is required
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("price", { required: true })}
              className="input input-bordered input-info w-full"
            />
            {errors.price?.type === "required" && (
              <p className="text-red-600" role="alert">
                Price is required
              </p>
            )}
          </div>

          <input
            className="btn bg-blue-100 hover:bg-blue-800 text-blue-800 hover:text-blue-100 w-full mt-4 "
            type="submit"
            value="Add Class"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
