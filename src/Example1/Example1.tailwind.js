import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Reply from "@material-ui/icons/Reply";

const Example1 = () => {
  return (
    <article className="flex rounded-2xl p-3 gap-3 bg-white shadow-lg">
      <div className="flex-shrink-0 w-1/2">
        <div className="relative h-0 pb-custom rounded-xl overflow-hidden">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1557939628-3e476420db6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="my plant"
          />
        </div>
      </div>
      <div className="py-3 px-4">
        <Typography variant="h4" className="mb-3 text-2xl">
          <b>
            Green plants are going to extinct about 500 times faster than they
            should, Study finds
          </b>
        </Typography>
        <Typography color="textSecondary" className="mb-8">
          If you are the sort of person who just can not keep a plant alive, you
          are not alone according to a new study published June 10 in the
          journal Nature.
        </Typography>
        <div className="flex items-center gap-3">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            alt=""
          />
          <div className="flex-1">
            <div className="font-semibold">Alexander Parkinson</div>
            <Typography color="textSecondary" variant="body2">
              Jun 20, 2019
            </Typography>
          </div>
          <IconButton>
            <Reply />
          </IconButton>
        </div>
      </div>
    </article>
  );
};

export default Example1;
