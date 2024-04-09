import React from "react";

const Article = ({ title, content, author, date }) => {
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }


    function getInitials(name) {
        const words = name.split(" ");
        const initials = words.map(word => word.charAt(0).toUpperCase());
        return initials.join("");
    }
    return (
        <div>
            <div class="bg-transparent flex justify-center items-center p-3">
                <div class="w-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="bg-gray-200 text-gray-700 text-xl font-extrabold px-6 py-4">{title}</div>

                    <div class="flex gap-3 items-center px-6 py-4">
                        <div class="bg-blue-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Published On</div>
                        <div class="text-sm">{formatDate(date)}</div>
                    </div>

                    <div class="px-6 py-4 border-t border-gray-200">
                        <div class="border rounded-lg p-4 bg-gray-200">
                            {content}
                        </div>
                    </div>

                    <div class="bg-gray-200 px-6 py-4">
                        <div class="uppercase text-xs text-gray-600 font-bold">Author</div>

                        <div class="flex items-center pt-3">
                            <div class="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">{getInitials(author)}</div>
                            <div class="ml-4">
                                <p class="font-bold">{author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;