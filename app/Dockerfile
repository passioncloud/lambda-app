FROM public.ecr.aws/lambda/nodejs:14


# LAMBDA_TASK_ROOT is defined by lthe base image as /var/task
# LAMBDA_RUNTIME_DIR is defined by base image as /var/runtime
COPY app.js package.json ${LAMBDA_TASK_ROOT}

# install dependencies
RUN npm install 

# Set the CMD to my handler
# Test using: curl -XPOST http://localhost:8080/2015-03-31/functions/function/invocations -d '{}'
CMD ["app.myHandler"]