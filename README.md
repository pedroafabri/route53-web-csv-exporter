# Route53 Web Console CSV Exporter

> Why spend 5 minutes on a task when you can spend 5 hours automating it?

# Introduction

My security team asked for the configuration of all the hosted zones on Route53 and, as I was trying to export it, I discovered something horrendous: 

**AWS doesn't allow you to export the configuration from the web console.**

So I made this simple script so you can copy-paste it on the console and download the configuration as a CSV file.

# Usage

# "Build"

Just download the repo and run the script `build`. It'll compress the file into `dist/export53.min.js`.