import { PiImagesLight } from "react-icons/pi";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

export default function AddNews() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const options = [
    { value: "select1", label: "select1" },
    { value: "select2", label: "Select2" },
    { value: "select3", label: "select3" },
  ];

  return (
    <section className="bg-[#F5F6FA] py-3 px-3 md:px-5 lg:px-12 rounded">
      <div className="bg-[#FFFFFF] md:px-10 px-5 py-5">
        <h1 className="text-[#005274] font-bold text-xl">
          Add News or Article
        </h1>
        <form className="mt-3 space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-sm font-semibold">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="px-3 text-sm py-1 focus:outline-none border border-black rounded-md border-opacity-50"
            >
              <option value="">Choose a category</option>
              <option value="">opsi2</option>
              <option value="">opsi3</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="focus:outline-none px-3 py-1 border border-black rounded-md border-opacity-50 text-sm italic focus:not-italic"
              placeholder="Write the title of the news"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="metaTitle" className="text-sm font-semibold">
              Meta Title
            </label>
            <input
              type="text"
              id="metaTitle"
              className="focus:outline-none px-3 py-1 border border-black rounded-md border-opacity-50 text-sm italic focus:not-italic"
              placeholder="Write the meta title of the news"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="metaDesc" className="text-sm font-semibold">
              Meta Desc
            </label>
            <input
              type="text"
              id="metaDesc"
              className="focus:outline-none px-3 py-1 border border-black rounded-md border-opacity-50 text-sm italic focus:not-italic"
              placeholder="Write the description of the news"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="slug" className="text-sm font-semibold">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              className="focus:outline-none px-3 py-1 border border-black rounded-md border-opacity-50 text-sm italic focus:not-italic"
              placeholder="Write the slug of the content's URL"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="intro" className="text-sm font-semibold">
              Intro
            </label>
            <input
              type="text"
              id="intro"
              className="focus:outline-none px-3 py-1 border border-black rounded-md border-opacity-50 text-sm italic focus:not-italic"
              placeholder="Write an intro to attract readers"
            />
          </div>
          <div>
            <label htmlFor="coverImages" className="space-y-2">
              <span className="text-sm font-semibold">Cover Images</span>
              <div className="border w-[220px] h-[110px] border-black rounded border-opacity-50 flex flex-col justify-center items-center gap-4 text-black text-opacity-30 text-xs">
                {selectedImage ? (
                  <div className="w-[220px] h-[110px]">
                    <img src={selectedImage} alt="Preview" />
                  </div>
                ) : (
                  <>
                    <div className="px-5">
                      <PiImagesLight className="scale-[4]" />
                    </div>
                    <p className="italic">Tambahkan Gambar</p>
                  </>
                )}
              </div>
            </label>
            <input
              type="file"
              className="hidden"
              id="coverImages"
              onChange={handleImageChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="intro" className="text-sm font-semibold">
              Content
            </label>
            <div className="max-">
              <CKEditor
                editor={ClassicEditor}
                onReady={(editor) => {
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="tag" className="text-sm font-semibold">
              Tag
            </label>
            <Select
              options={options}
              isMulti
              name="colors"
              className="basic-multi-select text-sm focus:outline-none border-black"
              classNamePrefix="select"
              placeholder="Add more.."
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-semibold">
              Post Schedule
            </label>
            <div className="flex gap-2 w-full">
              <select className="w-1/2 px-3 text-sm py-1 focus:outline-none border border-black rounded-md border-opacity-50">
                <option value="">dd/mm/yyyy</option>
              </select>
              <select className="w-1/2 px-3 text-sm py-1 focus:outline-none border border-black rounded-md border-opacity-50">
                <option value="">Start Time</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="status" className="text-sm font-semibold">
              Status
            </label>
            <select className="px-3 text-sm py-1 focus:outline-none border border-black rounded-md border-opacity-50">
              <option value="">Choose a category</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button className="border border-black px-4 md:px-14 py-1 font-semibold rounded hover:bg-[#50cbff] hover:border-[#50cbff] hover:text-white duration-200">
              Save as Draft
            </button>
            <button className="border border-[#1CABE6] px-4 md:px-14 py-1 font-semibold rounded bg-[#1CABE6] text-white hover:bg-[#50cbff] hover:border-[#50cbff] duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
