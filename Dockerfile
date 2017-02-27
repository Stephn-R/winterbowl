FROM microsoft/aspnetcore-build

# 1. Copy source code
WORKDIR /dotnetapp
COPY src/ .

# Install dependencies
RUN npm install -g yarn webpack
RUN yarn install
RUN dotnet restore

# 2. Build the project
RUN webpack
RUN dotnet build

# 3. Run the server
ENTRYPOINT ["dotnet", "run"]
