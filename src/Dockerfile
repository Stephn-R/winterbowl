# Grab the .NET Core Image
FROM microsoft/aspnetcore-build:1.1.0-projectjson

# Copy the application over
WORKDIR /dotnetapp
COPY src.csproj .

# Restore Nuget Packages
RUN dotnet restore

# Prepare the application
COPY . .
RUN dotnet publish -c Release -o bin/Release/PublishOutput

# Run the application
ENTRYPOINT ["dotnet", "bin/Release/PublishOutput/src.dll"]
