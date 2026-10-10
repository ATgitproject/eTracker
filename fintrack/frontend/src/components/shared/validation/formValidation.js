"use client";

export default function getRules(post) {
  const rules = {};

  if (post.required) {
    rules.required = {
      value: true,
      message: "Please Enter " + post.label,
    };
  }

  if (post.regex) {
    rules.pattern = {
      value: new RegExp(post.regex),
      message: post.regexMessage || "Please Enter a valid " + post.label,
    };
  }

  return rules;
}
