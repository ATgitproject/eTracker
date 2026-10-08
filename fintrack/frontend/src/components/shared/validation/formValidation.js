"use client";

export default function getRules(post) {
  if (!post?.required) {
    return {};
  }

  return {
    required: {
      value: post.required,
      message: "Please Enter " + post.label,
    },
  };
}
