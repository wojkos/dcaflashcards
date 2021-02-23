flashcardDeck = {
  title: "Docker Certified Associate",
  catchPhrase: "Test how well you know Docker",
  cards: [
  {
    "question": "What is the endpoint that we can use to check the health of a single UCP manager node?",
    "answer": "https://_ping"
  },
  {
    "question": "What is the correct order to backup Docker EE components?",
    "answer": "Backup Swarm UCP and then DTR"
  },
  {
    "question": "What is the correct order to upgrade a Docker cluster?",
    "answer": "Upgrade engine and kernel UCP and then DTR."
  },
  {
    "question": "What are the steps to perform to sign images in a way that UCP trusts them?",
    "answer": "- Initialize trust metadata for repository| - Delegate singing to the keys in your UCP client bundle| - Configure Notary client"
  },
  {
    "question": "What is the difference between UCP workers and managers?",
    "answer": "UCP-agent service automatically starts all UCP components in a manager node and only proxy service in worker node."
  },
  {
    "question": "Which of the following commands is correct if container exits due to an error, which manifests as a non-zero exit code.",
    "answer": "`docker run --restart on-failure nginx`"
  },
  {
    "question": "What are the two types of UCP client bundles?",
    "answer": "Admin user certificate bundles and user certificate bundles."
  },
  {
    "question": "What are the requirements to install Docker Trusted Registry (DTR)? (Select all that apply)",
    "answer": "- DTR can be installed on-premises or on a cloid provider| - All nodes have a fixed hostname| - All nodes must be a worker node maaged by Universal Control Playne"
  },
  {
    "question": "What is the command to set DNS server for all Docker containers?",
    "answer": "`dockered --dns IP_ADDRESS`"
  },
  {
    "question": "What is the difference between a replicated and a global service?",
    "answer": "Number of identical tasks can be specified for a replicated service. There is no pre-specified number of tasks for global service"
  },
  {
    "question": "What are the two types of docker swarm services?",
    "answer": "replicated and global services"
  },
  {
    "question": "What is the docker command to create a container with custom DNS server(s)?",
    "answer": "`docker container create --dns=IP_ADDRESS`"
  },
  {
    "question": "What is the docker command to roll back to the previous version of a service?",
    "answer": "`docker sevice update --rollback`"
  },
  {
    "question": "Paul have some containerized software that needs to have a reference to the hostname of the node that the software is running on. Which of the following commands Paul will pass the node hostname as an environment variable into each task in a service?",
    "answer": "`docker service create --env NODE_HOSTNAME=\"{{.Node.Hostname}}\" nginx`"
  },
  {
    "question": "Which of the below correct command that need to be executed to sign an image before pushing it to repository?",
    "answer": "`export DOCKER_CONTENT_TRUST=1`"
  },
  {
    "question": "Which of the following is not backed up when performing a Docker Trusted Registry (DTR) metadata backup?",
    "answer": "Docker images (backed up: RPAC settings, DTR configuratons, repository metadata)"
  },
  {
    "question": "Which of the following best describes the procedure for backing up the Universal Control Plane (UCP) metadata?",
    "answer": "Run a container from ucp image with the backup command."
  },
  {
    "question": "What is the docker command to add a node to a swarm?",
    "answer": "`docker swarm join`"
  },
  {
    "question": "Which of the following namespaces is not enabled by default?",
    "answer": "user (default: pid, mnt, uts)"
  },
  {
    "question": "What is the default format of docker inspect output?",
    "answer": "json"
  },
  {
    "question": "Which command do you use to create a new swarm?",
    "answer": "`docker swarm init --advertise-addr <MANAGER-IP>`"
  },
  {
    "question": "What is this flag --advertise-addr for?",
    "answer": "This flag configures the IP address for the manager node and The other nodes in the swarm must be able to access the manager at the IP address."
  },
  {
    "question": "Which command do you use to find the information about the nodes in the swarm?",
    "answer": "`docker node ls`"
  },
  {
    "question": "How to add another manager to the swarm?",
    "answer": "// it generate the instructions for the manager to be added`docker swarm join-token manager`"
  },
  {
    "question": "How to add another worker node to the swarm?",
    "answer": "` // it generate the instructions for the worker to be added docker swarm join-token worker`"
  },
  {
    "question": "What is the autolock feature in the Docker swarm?",
    "answer": "When Docker restarts, both the TLS key used to encrypt communication among swarm nodes, and the key used to encrypt and decrypt Raft logs on disk, are loaded into each manager node’s memory.Docker 1.13 introduces the ability to protect the mutual TLS encryption key and the key used to encrypt and decrypt Raft logs at rest, by allowing you to take ownership of these keys and to require manual unlocking of your managers. This feature is called autolock."
  },
  {
    "question": "How to lock the swarm?",
    "answer": "// This command produces unlock key. You need to place that in safe place `docker swarm init --autolock`"
  },
  {
    "question": "How to unlock the swarm?",
    "answer": "`docker swarm unlock`"
  },
  {
    "question": "How to enable or disable autolock on the existing swarm?",
    "answer": "//enable autolock| `docker swarm update --autolock=true`| //disable autolock| `docker swarm update --autolock=false`"
  },
  {
    "question": "How to view the current unlock key for the running swarm?",
    "answer": "`docker swarm unlock-key`"
  },
  {
    "question": "How to rotate the unlock key?",
    "answer": "`docker swarm unlock-key --rotate`"
  },
  {
    "question": "If the key was rotated after one of the manager nodes became unavailable and if you don’t have access to the previous key you may need to force the manager to leave the swarm and join it back as a new manager. Is this statement correct?",
    "answer": "Yes"
  },
  {
    "question": "How to deploy a service in the docker swarm?",
    "answer": "// for the nginx image|  `docker create service --replicas 3 --name nginx-web nginx`"
  },
  {
    "question": "How to list the services in the Docker swarm?",
    "answer": "`docker service ls`"
  },
  {
    "question": "How to list the tasks of the service in the Docker swarm?",
    "answer": "`docker service ps <service name>`"
  },
  {
    "question": "How to inspect the service on the swarm?",
    "answer": "`docker service inspect <service name>`"
  },
  {
    "question": "How to find out which nodes are running the service?",
    "answer": "`docker service ps <service>`"
  },
  {
    "question": "How to find out more details of the container running these tasks of the service?",
    "answer": "// you need to run this command on the particular node|  `docker ps`"
  },
  {
    "question": "What is Docker stack?",
    "answer": "A stack is a group of interrelated services that share dependencies, and can be orchestrated and scaled together."
  },
  {
    "question": "Explain the several commands associated with Docker stack?",
    "answer": "// deploy the new stack or update|  `docker stack deploy -c <compose file>`| // list services in the stack|  `docker stack services`| // list the tasks in the stack|  `docker stack ps`| // remove the stack`docker stack rm`| //List stack|  `docker stack ls`"
  },
  {
    "question": "How to filter the services in the stack?",
    "answer": "// with the help of --filter flag|docker stack service nginx-web --filter name=web "
  },
  {
    "question": "How to format the output of the docker stack services command?",
    "answer": "docker stack services --format \"{{.ID}}: {{.Mode}} {{.Replicas}}\""
  },
  {
    "question": "How to increase the number of replicas?",
    "answer": "docker service scale SERVICE=REPLICAS // example|docker service scale frontend=50 // you can scale multiple services as well"
  },
  {
    "question": "How to revert the changes for the service configuration?",
    "answer": "docker service rollback my-service"
  },
  {
    "question": "What are the networks available for the docker services?",
    "answer": "-overlay networks: manage communications among the Docker daemons participating in the swarm.You can attach a service to one or more existing overlay networks as well, to enable service-to-service communication.| -ingress network: is a special overlay network that facilitates load balancing among a service’s nodes. When any swarm node receives a request on a published port, it hands that request off to a module called IPVS. IPVS keeps track of all the IP addresses participating in that service, selects one of them, and routes the request to it, over the ingress network.| -docker_gwbridge: is a bridge network that connects the overlay networks (including the ingress network) to an individual Docker daemon’s physical network."
  },
  {
    "question": "Is the ingress network created automatically when you initialize or join a swarm?",
    "answer": "Yes"
  },
  {
    "question": "Is docker_gwbridge network created automatically when you initialize or join a swarm?",
    "answer": "Yes"
  },
  {
    "question": "How to create an overlay network?",
    "answer": "docker network create --driver overlay my-network // you can customize it|docker network create \\ | --driver overlay \\ | --subnet 10.0.9.0/24 \\ | --gateway 10.0.9.99 \\ | my-network"
  },
  {
    "question": "How to attach a service to an overlay network?",
    "answer": "docker service create \\ | --replicas 3 \\ | --name my-web \\ | --network my-network \\ |nginx"
  },
  {
    "question": "How to find which networks the service is connected to?",
    "answer": "docker network inspect my-network|or|docker service ls // for the name|docker service ps <SERVICE> // to list the networks"
  },
  {
    "question": "Customize the ingress network involves removing and creating a new one and you need to do that before you create any services in the swarm. Is this statement correct?",
    "answer": "Yes"
  },
  {
    "question": "How to remove and create an ingress network?",
    "answer": "`docker network rm ingressdocker network create \\ | --driver overlay \\ | --ingress \\ | --subnet=10.11.0.0/16 \\ | --gateway=10.11.0.2 \\ | --opt com.docker.network.mtu=1200 \\ |my-ingress`"
  },
  {
    "question": "Does docker service create command supports -v or — volume flag?",
    "answer": "No"
  },
  {
    "question": "What are the volume drivers?",
    "answer": "When building fault-tolerant applications, you might need to configure multiple replicas of the same service to have access to the same files.Volume drivers allow you to abstract the underlying storage system from the application logic. For example, if your services use a volume with an NFS driver, you can update the services to use a different driver, as an example to store data in the cloud, without changing the application logic."
  },
  {
    "question": "How to create a volume with the volume driver?",
    "answer": "docker volume create --driver vieux/sshfs \\ | -o sshcmd=test@node2:/home/test \\ | -o password=testpassword \\ | sshvolume"
  },
  {
    "question": "How to create a service with volume driver?",
    "answer": "docker service create -d\\ | --name nfs-service \\ | --mount 'type=volume,source=nfsvolume,target=/app,volume-driver=local,volume-opt=type=nfs,volume-opt=device=:/var/docker-nfs,volume-opt=o=addr=10.0.0.10' \\ |nginx:latest"
  },
  {
    "question": "If you want to troubleshoot the UCP clusters what is the best method?",
    "answer": "it's always best practice to use client bundle to troubleshoot UCP clusters."
  },
  {
    "question": "What is the general flow when troubleshooting services or clusters?",
    "answer": "`docker service ls`|  `docker service ps <service>`|  `docker service inspect <service>`|  `docker inspect <task>`|  `docker inspect <container>`|  `docker logs <container>`"
  },
  {
    "question": "How to update metadata about a node?",
    "answer": "you can use labels to add metadata about the node."
  },
  {
    "question": "How to add a label to the node?",
    "answer": "`docker node update --label-add foo worker // add multiple labels`|  `docker node update --label-add foo --label-add bar worker`"
  },
  {
    "question": "How to remove the label from the node?",
    "answer": "`docker node update --label-rm foo worker`"
  },
  {
    "question": "How to set up the service to divide tasks evenly over different categories of nodes?",
    "answer": "`--placement-pref // example: if we have three datacenters 3 replicas will be placed on each datacenterdocker service create \\--replicas 9 \\--name redis_2 \\--placement-pref 'spread=node.labels.datacenter' \redis: 3.0.6`"
  },
  {
    "question": "How to limit your service on particular nodes?",
    "answer": "--constraint // example: the following limits tasks for the redis service to nodes where the node type label equals queuedocker service create \\ | --name redis_2 \\ | --constraint 'node.labels.type == queue' \\ |redis: 3.0.6"
  },
  {
    "question": "Which algorithm does the docker engine use when it is in swarm mode to manage the global cluster state?",
    "answer": "Raft Consensus Algorithm"
  },
  {
    "question": "What is a quorum and why it is important?",
    "answer": "Quorun ensure that the cluster state stays consistent in the presence of failures by requiring a majority of nodes to agree on values.Raft tolerates up to (N-1)/2 failures and requires a majority or quorum of (N/2)+1 members to agree on values proposed to the cluster.without quorun swarm wont be able to serve the requests"
  },
  {
    "question": "What are the supported flags for creating services with templates?",
    "answer": "--env| --mount| --hostname // example| service create --name hosttempl \\--hostname=\"{{.Node.Hostname}}-{{.Node.ID}}-{{.Service.Name}}\"\\busybox top"
  },
  {
    "question": "No instruction can precede FROM in the Dockerfile. Is this statement correct?",
    "answer": "No. ARG is the only instruction can precede FROM"
  },
  {
    "question": "The RUN command normally utilizes cache from the previous build. Which flag should you specify for the build not to use cache?",
    "answer": "`--no-cachedocker build --no-cache .`"
  },
  {
    "question": "Is there any other instruction that can invalidate the cache?",
    "answer": "Yes. ADD"
  },
  {
    "question": "How many forms that CMD instruction has?",
    "answer": "CMD [\"executable\",\"param1\",\"param2\"] (exec form, this is the preferred form)|CMD [\"param1\",\"param2\"] (as default parameters to ENTRYPOINT)CMD command param1 param2 (shell form)"
  },
  {
    "question": "If CMD instruction provides default arguments for the ENTRYPOINT instruction, both should be specified in JSON format. Is this statement correct?",
    "answer": "Yes"
  },
  {
    "question": "What is the purpose of the CMD instruction in the Dockerfile?",
    "answer": "The main purpose of a CMD is to provide defaults for an executing container. These defaults can include an executable, or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well."
  },
  {
    "question": "How to check the labels for the current image?",
    "answer": "docker inspect // Under Labels section"
  },
  {
    "question": "What is the difference between ADD and COPY instructions?",
    "answer": "ADD [--chown=<user>:<group>] <src>... <dest>The ADD instruction copies new files, directories or remote file URLs from <src> and adds them to the filesystem of the image at the path <dest>.COPY [--chown=<user>:<group>] <src>... <dest>The COPY instruction copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest>."
  },
  {
    "question": "What is the USER instruction in the Dockerfile?",
    "answer": "The USER instruction sets the user name (or UID) and optionally the user group (or GID) to use when running the image and for any RUN, CMD and ENTRYPOINT instructions that follow it in the Dockerfile."
  },
  {
    "question": "What is the ARG instruction in the Dockerfile?",
    "answer": "ARG <name>[=<default value>]|The ARG instruction defines a variable that users can pass at build-time to the builder with the docker build command using the --build-arg <varname>=<value> flag.|docker build --build-arg CONT_IMG_VER=v2.0.1 .|FROM ubuntu|ARG CONT_IMG_VER|ENV CONT_IMG_VER=${CONT_IMG_VER:-v1.0.0}|RUN echo $CONT_IMG_VER"
  },
  {
    "question": "What are all the options that can be provided for the HEALTHCHECK instruction?",
    "answer": "--interval=DURATION (default: 30s)--timeout=DURATION (default: 30s)--start-period=DURATION (default: 0s)--retries=N (default: 3)"
  },
  {
    "question": "What is the SHELL instruction in the Dockerfile?",
    "answer": "The SHELL instruction allows the default shell used for the shell form of commands to be overridden. The default shell on Linux is [\"/bin/sh\",\"-c\"], and on Windows is [\"cmd\",\"/S\",\"/C\"]. The SHELL instruction must be written in JSON form in a Dockerfile."
  },
  {
    "question": "What should you do if you want to exclude some files while executing the docker build image and don’t want to send all the files to Docker daemon?",
    "answer": "use .dockerignore file"
  },
  {
    "question": "What is the best way to drastically reduce the size of an image?",
    "answer": "Multi Stage Builds"
  },
  {
    "question": "How do you minimize the number of layers while building the image??",
    "answer": "Only the instructions RUN, COPY, ADD create layers.Where possible, use multi-stage builds, and only copy the artifacts you need into the final image.sort multi line arguments|RUN apt-get update && apt-get install -y \\ |bzr \\ |cvs \\ |git \\ |mercurial \\ | subversion"
  },
  {
    "question": "How to leverage the build cache?",
    "answer": "Put instructions that likely to change often at the bottom of the dockerfile."
  },
  {
    "question": "How to remove unused images?",
    "answer": "docker image prune"
  },
  {
    "question": "How to format the output of the docker inspect command?",
    "answer": "by using --format flag //examples|docker inspect --format=\"{{range .NetworkSettings.Networks}}{{.MacAddress}}{{end}}\" $INSTANCE_IDdocker inspect --format=\"{{.LogPath}}\" $INSTANCE_ID"
  },
  {
    "question": "How to create a Docker image from archive or stdin?",
    "answer": "docker image load // example|  `docker image load -i example.tar`"
  },
  {
    "question": "How to modify an image to a single layer?",
    "answer": "// take any multiple layer image| // run the container|docker export <container> > single-layer.tar|docker import /path/to/single-layer.tar| // check the history|docker image history"
  },
  {
    "question": "When you create a container It adds one writable layer on top of all the layers of the image. Is this statement about the image correct?",
    "answer": "yes"
  },
  {
    "question": "What is the location of the registry configuration file?",
    "answer": "`/etc/docker/registry/config.yml`"
  },
  {
    "question": "How to limit the number of records when docker search?",
    "answer": "`docker search nginx --limit=2`"
  },
  {
    "question": "How to format the docker search?",
    "answer": "`docker search --format \"{{.Name}}: {{.StarCount}}\" nginx`"
  },
  {
    "question": "How to disable Image signing while pushing an image to the repository?",
    "answer": "`docker push [OPTIONS] NAME[:TAG]--disable-content-trust=true`"
  },
  {
    "question": "How to enable docker content trust in the Docker CLI?",
    "answer": "`export DOCKER_CONTENT_TRUST=1`|  `docker push <dtr-domain>/<repository>/<image>:<tag>`"
  },
  {
    "question": "How to pull an image with multiple images?",
    "answer": "-a or --all-tags|  `docker pull --all-tags fedora`"
  },
  {
    "question": "How to remove all images which are not used by existing containers?",
    "answer": "`docker image prune -a`"
  },
  {
    "question": "How to limit the scope when pruning images?",
    "answer": "by uisng --filter flag|  `docker image prune -a --filter \"until=24h\"`"
  },
  {
    "question": "How to remove an image?",
    "answer": "`docker rmi <IMAGE ID>`"
  },
  {
    "question": "How to remove image without deleting the untagged parent images?",
    "answer": "docker rmi --no-prune <IMAGE ID>"
  },
  {
    "question": "How to delete an image from the repository?",
    "answer": "login into DTR web UI|go to the TAGS section delete the specific TAG|you can also delete all images by deleting the entire repository"
  },
  {
    "question": "What is the recommended way of installing Docker",
    "answer": "set up docker repositories|install from them for the ease of installation and upgrade tasks."
  },
  {
    "question": "How to add the user to the Docker group and use docker as a non-root user?",
    "answer": "sudo usermod -aG docker your-user"
  },
  {
    "question": "What are the recommended storage drivers on different distributions?",
    "answer": "Centos: overlay2|Ubuntu supports overlay2, aufs and btrfs storage drivers. Overlay2 is the default one"
  },
  {
    "question": "What are all the release channels that Docker CE supports?",
    "answer": "Stable gives you latest releases for general availability.|Test gives pre-releases that are ready for testing before general availability.|Nightly gives you latest builds of work in progress for the next major releas"
  },
  {
    "question": "What are logging drivers?",
    "answer": "Docker has multiple mechanisms to get the logging information from running docker containers and services. These mechanisms are called logging drivers"
  },
  {
    "question": "How to configure a logging driver for the Docker daemon so that all the containers use it?",
    "answer": "configure log-driver in /etc/docker/daemon.json{ | \"log-driver\": \"syslog\" | }"
  },
  {
    "question": "Whats is the default logging driver?",
    "answer": "json-file"
  },
  {
    "question": "If you have configurable options for your logging driver how do you specify?",
    "answer": "use log-opts in the daemon.json file\"{ |    \"log-driver\": \"json-file\", |    \"log-opts\": { |      \"max-size\": \"10m\", |      \"max-file\": \"3\", |      \"labels\": \"production_status\", | \"env\": \"os,customer\" | } | }\""
  },
  {
    "question": "How to find the logging driver for the Docker daemon?",
    "answer": "docker info --format \"{{.LoggingDriver}}\""
  },
  {
    "question": "How to configure a logging driver for a container?",
    "answer": "`docker run -it --log-driver json-file --log-opt max-size=10m alpine ash`"
  },
  {
    "question": "What are the available logging drivers for the Docker CE edition?",
    "answer": "json-file | local | journald"
  },
  {
    "question": "We should use a fixed IP address for the advertise address to prevent the swarm from becoming unstable on machine reboot. Is this statement correct?",
    "answer": "Yes. If the whole swarm restarts and every manager node subsequently gets a new IP address, there is no way for any node to contact an existing manager. Therefore the swarm is hung while nodes try to contact one another at their old IP addresses."
  },
  {
    "question": "What is the location where swarm managers save the swarm state??",
    "answer": "/var/lib/docker/swarm"
  },
  {
    "question": "How to backup the swarm?",
    "answer": "1. If autolock is enabled. You must unlock the swarm | 2. stop the docker on the manager node so that you don't have unpredictable results | 3. save the entire contents of /var/lib/docker/swarm | 4. start the manager"
  },
  {
    "question": "How to restore swarm from the backup?",
    "answer": "1. shut down the docker on the targeted machine | 2. Remove the contents of /var/lib/docker/swarm | 3. Restore the /var/lib/docker/swarm directory from the backup | 4. Start the docker on the node so that it doesn't connect to old ones `docker swarm init --force-new-cluster` | 5. Verify the state of the swarm docker service ls | 6. rotate the autolock key |7. Add manager and worker nodes for the required capacity| 8. backup this swarm"
  },
  {
    "question": "What is a team in the DTR?",
    "answer": "A team defines the permissions a set of users have for a set of repositories."
  },
  {
    "question": "What are all the permission levels that teams could have?",
    "answer": "Read Only: View repository and pull images. | Read Write: View repository, pull and push images. | Admin: Manage repository and change its settings, pull and push images."
  },
  {
    "question": "Where is the Docker daemon directory?",
    "answer": "/var/lib/docker on Linux |C:\\ProgramData\\docker on Windows"
  },
  {
    "question": "How to enable the debugging on Docker daemon?",
    "answer": "1. add this flag in /etc/docker/daemon.json{\"debug\": true} | 2. Send a HUP signal to the daemon to cause it to reload its configuration.sudo kill -SIGHUP $(pidof dockerd)"
  },
  {
    "question": "How to check whether Docker is running?",
    "answer": "// all these can be used depending on the operating system | docker infosudo systemctl is-active docker | sudo status docker | sudo service docker status"
  },
  {
    "question": "What are the hardware and software requirements for UCP?",
    "answer": "Minimum |1. 8GB of RAM for manager nodes or nodes running DTR | 2. 4GB of RAM for worker nodes | 3. 3GB of free disk spaceRecommended |  1. 16GB of RAM for manager nodes or nodes running DTR | 2. 4 vCPUs for manager nodes or nodes running DTR | 3. 25-100GB of free disk space"
  },
  {
    "question": "What products that Docker EE contains?",
    "answer": "UCP | DTR | Docker Engine with enterprise-grade support"
  },
  {
    "question": "Where is the location of the custom certificates?",
    "answer": "/etc/docker/certs.d"
  },
  {
    "question": "What are the ports that DTR uses?",
    "answer": "80/tcp     -     Web app and API client access to DTR. |443/tcp    -     Web app and API client access to DTR"
  },
  {
    "question": "DTR needs to be installed on a worker node that is being managed by UCP. You can't install DTR on a standalone Docker engine. Is this statement correct?",
    "answer": "Yes"
  },
  {
    "question": "How to backup the UCP",
    "answer": "To create a UCP backup, run the docker/ucp: 2.2.22 backup command on a single UCP managerdocker container run \\ |--log-driver none --rm \\ |  --interactive \\ |  --name ucp \\ |  -v /var/run/docker.sock:/var/run/docker.sock \\ |  docker/ucp: 2.2.22 backup \\ |  --id <ucp-instance-id> \\ |  --passphrase \"secret\" > /tmp/backup.tar"
  },
  {
    "question": "How to restore the UCP?",
    "answer": "docker/ucp: 2.2.22 restore --passphrase \"secret\"docker container run --rm -i --name ucp \\ | -v /var/run/docker.sock:/var/run/docker.sock  \\ | docker/ucp: 2.2.22 restore --passphrase \"secret\" < /tmp/backup.tar"
  },
  {
    "question": "How to backup the DTR?",
    "answer": "To perform a backup of a DTR node, run the docker/dtr backup command."
  },
  {
    "question": "How to configure Docker to start on boot?",
    "answer": "`sudo systemctl enable docker`"
  },
  {
    "question": "What is the default network that the docker creates automatically?",
    "answer": "Bridge"
  },
  {
    "question": "How to list the networks on the Docker machine?",
    "answer": "`docker netwrok ls`"
  },
  {
    "question": "How to inspect the default network bridge?",
    "answer": "docker network inspect bridge"
  },
  {
    "question": "How to create a user-defined network?",
    "answer": "docker network create --driver bridge my-network"
  },
  {
    "question": "How to connect the existing container to the user-defined network?",
    "answer": "docker netwrok connect my-network alpine2"
  },
  {
    "question": "How to publish a port so that it can be accessed externally?",
    "answer": "`docker run -p 127.0.0.1:$HOSTPORT:$CONTAINERPORT --name CONTAINER -t <image>`"
  },
  {
    "question": "How to list port mappings or a specific mapping for the container?",
    "answer": "// List the containers | docker ps // use this command with container name | docker port <CONTAINER NAME> // USE the specific port | docker port <CONTAINER NAME> <specific port>"
  },
  {
    "question": "What are all the different built-in network drivers?",
    "answer": "Bridge Network Driver | Overlay Network Driver | MACVLAN Driver | Host | None "
  },
  {
    "question": "What are the Bridge network and its use case?",
    "answer": "The bridge driver creates a private network internal to the host so containers on this network can communicate.The bridge driver does the service discovery for us automatically if two containers are on the same networkThe bridge driver is a local scope driver, which means it only provides service discovery, IPAM, and connectivity on a single host."
  },
  {
    "question": "What is the scope of the bridge network?",
    "answer": "local"
  },
  {
    "question": "What are the Overlay network and their use case?",
    "answer": "The built-in Docker overlay network driver radically simplifies many of the complexities in multi-host networking.It is a swarm scope driver, which means that it operates across an entire Swarm or UCP cluster rather than individual hosts."
  },
  {
    "question": "What is the scope of the overlay network?",
    "answer": "swarm"
  },
  {
    "question": "What are the MACVLAN network and their use case?What is the scope of the bridge network?",
    "answer": "The macvlan driver is the newest built-in network driver and offers several unique characteristics. It’s a very lightweight driver, because rather than using any Linux bridging or port mapping, it connects container interfaces directly to host interfaces."
  },
  {
    "question": "What is the scope of the macvlan network?",
    "answer": "local"
  },
  {
    "question": "What are the Host network and its use case?",
    "answer": "With the host driver, a container uses the networking stack of the host. There is no namespace separation, and all interfaces on the host can be used directly by the container."
  },
  {
    "question": "What is the scope of the host network?",
    "answer": "local"
  },
  {
    "question": "What are the None network and its use case?",
    "answer": "The none driver gives a container its own networking stack and network namespace but does not configure interfaces inside the container. Without additional configuration, the container is completely isolated from the host networking stack."
  },
  {
    "question": "The Docker networking architecture is built on a set of interfaces called the Container Networking Model (CNM). Is this statement correct?",
    "answer": "Yes"
  },
  {
    "question": "What is a sandbox in the CNM model?",
    "answer": "A Sandbox contains the configuration of a container's network stack. This includes the management of the container's interfaces, routing table, and DNS settings. An implementation of a Sandbox could be a Windows HNS or Linux Network Namespace, a FreeBSD Jail, or other similar concept. A Sandbox may contain many endpoints from multiple networks."
  },
  {
    "question": "What is an endpoint in the CNM model?",
    "answer": "An Endpoint joins a Sandbox to a Network. The Endpoint construct exists so the actual connection to the network can be abstracted away from the application. This helps maintain portability so that a service can use different types of network drivers without being concerned with how it's connected to that network."
  },
  {
    "question": "What is a network in the CNM model?",
    "answer": "The CNM does not specify a Network in terms of the OSI model. An implementation of a Network could be a Linux bridge, a VLAN, etc. A Network is a collection of endpoints that have connectivity between them. Endpoints that are not connected to a network do not have connectivity on a network."
  },
  {
    "question": "What part of the Docker that provides the actual implementation that makes networks work?",
    "answer": "Network Drivers"
  },
  {
    "question": "What is IPAM drivers?",
    "answer": "Docker has a native IP Address Management Driver that provides default subnets or IP addresses for the networks and endpoints if they are not specified."
  },
  {
    "question": "How to configure docker to use external DNS?",
    "answer": "edit the /etc/docker/daemon.json{\"dns\": [\"10.0.0.2\",\"8.8.8.8\"]} | restart the docker | sudo systemctl docker restart"
  },
  {
    "question": "Which network should handles control and data traffic related to swarm services?",
    "answer": "ingress"
  },
  {
    "question": "Which network which connects the individual Docker daemon to the other daemons participating in the swarm?",
    "answer": "docker_gwbridge"
  },
  {
    "question": "What is the default network created when you create a swarm cluster?",
    "answer": "ingress"
  },
  {
    "question": "How to create a user-defined overlay network for communication among services?",
    "answer": "`docker network create -d overlay my-overlay`"
  },
  {
    "question": "How to create an overlay network which can be used by swarm services or standalone containers to communicate with other standalone containers running on other Docker daemons?",
    "answer": "create with --attachable flagdocker network create -d overlay --attachable my-attachable-overlay"
  },
  {
    "question": "How to encrypt application data as well on the swarm?",
    "answer": "// use --opt=encrypted |docker network create --opt encrypted --driver overlay --attachable my-attachable-multi-host-network"
  },
  {
    "question": "What is DCT?",
    "answer": "Through DCT, image publishers can sign their images and image consumers can ensure that the images they use are signed."
  },
  {
    "question": "What is DCT stand for?",
    "answer": "Docker Content Trust"
  },
  {
    "question": "What is the command to generate delegation keys?",
    "answer": "`docker trust generate key`"
  },
  {
    "question": "How to load if you have any existing keys?",
    "answer": "`docker trust key load`"
  },
  {
    "question": "How to sign a particular tag and push it up to the registry?",
    "answer": "`docker trust sign dtr.example.com/admin/demo: 1`"
  },
  {
    "question": "How to enable docker content trust so that you can sign images automatically when you use docker push?",
    "answer": "export DOKCER_CONTENT_TRUST=1"
  },
  {
    "question": "How to inspect remote trusted data for a tag?",
    "answer": "docker trust inspect"
  },
  {
    "question": "How to remove remote trusted data for a tag?",
    "answer": "docker trust revoke"
  },
  {
    "question": "What is a grant?",
    "answer": "A grant defines who has how much access to set of resources"
  },
  {
    "question": "What is the subject?",
    "answer": "A subject can be user, team, organization and is granted a role for set of resources"
  },
  {
    "question": "What is the role?",
    "answer": "A role is a set of permitted API operations that you can assign to a specific subject and collection by using a grant"
  },
  {
    "question": "What is a Client Bundle?",
    "answer": "A client bundle is a group of certificates downloadable directly from the Docker Universal Control Plane (UCP) user interface within the admin section for “My Profile”. This allows you to authorize a remote Docker engine to a specific user account managed in Docker EE, absorbing all associated RBAC controls in the process. You can now execute docker swarm commands from your remote machine that take effect on the remote cluster."
  },
  {
    "question": "What is the easiest way to access or control the UCP?",
    "answer": "Client Bundle"
  },
  {
    "question": "What is the kernel feature that isolates the processes running in different containers?",
    "answer": "Namespaces"
  },
  {
    "question": "Which kernel feature limits the resources used by docker containers?",
    "answer": "Control Groups"
  },
  {
    "question": "What is the kernel feature that needed extra configuration?",
    "answer": "user"
  },
  {
    "question": "Docker swarm should be secure by default?",
    "answer": "yes"
  },
  {
    "question": "What is the pluggable architecture that Docker supports for the container writable layer storage?",
    "answer": "Storage Drivers"
  },
  {
    "question": "What is the preferred storage driver for all Linux distributions which need no extra configuration?",
    "answer": "Overlay2"
  },
  {
    "question": "Which device-mapper driver is used for production environments?direct-lvm"
  },
  {
    "question": "Which device-mapper driver is used for testing environments?",
    "answer": "loopback-lvm"
  },
  {
    "question": "How do you check the current storage driver information?",
    "answer": "docker info"
  },
  {
    "question": "How do you configure device-mapper?",
    "answer": "// stop docker | sudo systemctl stop docker // set the device-mapper in /etc/docker/daemon.json file| \"storage-driver\": \"devicemapper\" | \\start docker sudo systemctl start docker"
  },
  {
    "question": "what is the option that sets the direct-lvm for production device-mapper?",
    "answer": "dm.directlvm_device"
  },
  {
    "question": "What do you set the device-mapper and all configurable options in the daemon.json?",
    "answer": "{ |       \"storage-driver\": \"devicemapper\", |      \"storage-opts\": [ |        \"dm.directlvm_device=/dev/xdf\", |        \"dm.thinp_percent=95\", |        \"dm.thinp_metapercent=1\", |        \"dm.thinp_autoextend_threshold=80\", |         \"dm.thinp_autoextend_percent=20\", |        \"dm.directlvm_device_force=false\" |      ] |    }"
  },
  {
    "question": "What are the different available storage options available for containers?",
    "answer": "Block Storage | FiLE System Storage | Object Storage"
  },
  {
    "question": "Do containers create a writable layer on top of Image read-only layers?",
    "answer": "Yes"
  },
  {
    "question": "Where is the Docker’s local storage area?",
    "answer": "/var/lib/docker/<storage-driver>"
  },
  {
    "question": "What is the difference between bind mounts and volumes?",
    "answer": "Volumes are completely managed by docker |Bind Mounts are dependent on the host directory structure "
  },
  {
    "question": "Volumes don’t increase the size of the containers. Is this statement correct and why?",
    "answer": "Yes. Because volumes live outside of containers"
  },
  {
    "question": "What should we use if we want to persist the data beyond the lifecycle of the containers?",
    "answer": "Volumes"
  },
  {
    "question": "How to create a Volume?",
    "answer": "docker volume create my-volume"
  },
  {
    "question": "How to verify the volume is created with the container?",
    "answer": "// Look for the mounts section |    docker inspect devtest"
  },
  {
    "question": "How to create a volume with the --mount flag?",
    "answer": "docker run -d \\ |  --name devtest \\ |   --mount source=myvol2,target=/app \\ |  nginx:latest"
  },
  {
    "question": "How to remove all unused images not just dangling images?",
    "answer": "`docker system prune --all`"
  },
  {
    "question": "We have the below key:value pairs in a .yaml. How do we give a pod access to the secret via a volume? metadata.name: user-pid data.pid-password: cUae83JHes=",
    "answer": "```yaml apiVersion: v1 | kind: Pod |spec: |  volumes: |  - name: secrets |    secret: |      secretName: user-pid |      volumeMounts: |   - name: secrets |     mountPath: /etc/user-pid``` "
  },
  {
    "question": "What are four main types of services?",
    "answer": "- ClusterIP (Expose the service on a cluster-internal IP, not exposed to anything external to Kubernetes cluster) |- NodePort (Expose the service on each Node's IP at a static port.  External callers can call the service) |- LoadBalancer (Provision an external IP to act as a load balancer for the service.  Exposes a service to external callers) |- ExternalName (Maps a service to a DNS name.  The service doesn't change IP addresses, but it routes traffic to an external service that does have a dynamic IP)"
  },
  {
    "question": "What kubectl command will give you information such as what node and IP address a pod is on? And any failure events?",
    "answer": "`kubectl describe pod my-nginx`"
  },
  {
    "question": "What are some of the benefits of Deployments?",
    "answer": "Deployments support zero-downtime updates by creating and destroying replica sets and provide rollback functionality"
  },
  {
    "question": "What command will create three pod replicas?",
    "answer": "kubectl scale deployment my-deployement --replicas=3"
  },
  {
    "question": "What specifies that data in a storage provider should not be erased if a PVC is deleted?",
    "answer": "persistentVolumeReclaimPolicy: Retain"
  },
  {
    "question": "What does the spec.selector.matchLabels key in a Pod .yaml do?",
    "answer": "Queries for a template with the specified label in order to use that pod template"
  },
  {
    "question": "What command creates a ConfigMap from an env file?",
    "answer": "kubectl create configmap [configmap-name] --from-env-file=[path-to-file]"
  },
  {
    "question": "What is a LimitRange?",
    "answer": "A LimitRange specifies min and max limits on cpu and memory for pods in a namespace. This prevents pods from not being given a limit and consuming too much memory, thus causing other pods to fail on a node."
  },
  {
    "question": "What access mode allows only one client (i.e. one pod) to write to a PV?",
    "answer": "-ReadWriteOnce"
  },
  {
    "question": "How does Kubernetes accomplish a no downtime deployment?",
    "answer": "It spins up new pods and routes traffic to them, then subsequently destroys the old pods that no longer have traffic"
  },
  {
    "question": "What command can be used to externally expose a port on a clusterIP service?",
    "answer": "`kubectl port-forward service/[service-name] 8080`"
  },
  {
    "question": "What are some zero-downtime deployment options that kubernetes can facilitate?",
    "answer": "Blue-Green and Canary deployments, among others"
  },
  {
    "question": "If I have the following in a .yaml, how do I access it in a Pod .yaml | kind:PersistentVolumeClaim |  apiVersion: v1 |    metadata: |    name: pvc-1",
    "answer": "```yaml |spec: |  volumes: |  - name: blob1 |    persistentVolumeClaim: |      claimName: pvc-1```"
  },
  {
    "question": "What are the two types of Kubernetes probes?",
    "answer": "Liveness and readiness"
  },
  {
    "question": "What is the annotations.last-applied-configuration.key in a .yaml file?",
    "answer": "It gives details of the resource's configurations.  This allows changes to be made to a Pod using kubectl apply"
  },
  {
    "question": "What is a StatefulSet?",
    "answer": "A StatefulSet manages the deployment and scaling of a set of pods"
  },
  {
    "question": "What happens to a scheduled pod that cannot have its resource requests met by a node?",
    "answer": "It remains in the PENDING state."
  },
  {
    "question": "What is a risk of using a hostPath volume?",
    "answer": "It is dependent on the host.  If the host dies, the data is inaccessible and potentially lost."
  },
  {
    "question": "What command will show all running pods, replicasets, and deployments?",
    "answer": "`kubectl get all`"
  },
  {
    "question": " How are secrets stored on a node?",
    "answer": "tmpfd"
  },
  {
    "question": "True or False? A pod can have multiple volumes attached to it?",
    "answer": "True"
  },
  {
    "question": "Will `kubectl delete pod [pod-name]` remove and recreate a pod, or just remove?",
    "answer": "It will remove and recreate if there is an active deployment"
  },
  {
    "question": "What is gcePersistentDisk fsType?",
    "answer": "It is the file system type to use for the volume."
  },
  {
    "question": "What does Secret type:Opaque signify?",
    "answer": "The secret may contain unstructured data.  There are no constraints on the data."
  },
  {
    "question": "What field indicates the query by which nodes are selected to create a local storage PV on?",
    "answer": "nodeAffinity.required.nodeSelectorTerms"
  },
  {
    "question": "What is the name of the Azure volume type?",
    "answer": "azureFile"
  },
  {
    "question": "What is the difference between a memory request (spec.containers[].resources.requests.memory) and a memory limit (spec.containers[].resources.limits.memory) in a pod .yaml?",
    "answer": "A pod can use more memory than the memory request amount.  However, if the memory request amount is higher than the available memory on the node, the pod will throw an Out Of Memory error.  A memory limit is the maximum amount of memory that a pod will be allowed to use, even if the node has more available."
  },
  {
    "question": "If a pod has a memory request of 512MiB and a memory limit of 1 GiB, how many pods of this type could be run on a node with 2 GiB of avaiable memory?",
    "answer": "4.  As the docs say: \"A Container is guaranteed to have as much memory as it requests, but is not allowed to use more memory than its limit\"."
  },
  {
    "question": "What field in a StorageClass .yaml determines what volume plugin is used for creating PVs?",
    "answer": "provisioner"
  },
  {
    "question": "What command will show you the details of the secret with name: pid-acct?",
    "answer": "`kubectl describe secrets/pid-acct`"
  },
  {
    "question": "What kind of volume is useful for sharing transient data between two containers running on a pod?",
    "answer": "emptyDir.  This directory will be tied to the lifecycle of the pod."
  },
  {
    "question": "What command will show you the details of all ConfigMaps?",
    "answer": "`kubectl get cm`"
  },
  {
    "question": "What does the command ‘kubectl get deployments -l tier=frontend’ do?",
    "answer": "It lists all deployements with label: tier: frontend"
  },
  {
    "question": "True or False? A ConfigMap can be loaded through a volume?",
    "answer": "True.  In the pod .yaml file, specify spec.volumes and spec.spec.containers.volumeMounts to point to the appropriate ConfigMap"
  },
  {
    "question": "Which of the following is a cluster-wide storage unit provisioned by an administrator and has a lifecycle independent of pods?",
    "answer": "PersistentVolume.  (A pod uses a PersistentVolumeClaim to connect to the persistent volume.)"
  },
  {
    "question": "What flag in the yaml file will deny a container the ability to write to a volume?",
    "answer": "`volumeMounts.readOnly: true`"
  },
  {
    "question": "What is the difference between port, targetPort, and nodePort keys in a NodePort service .yaml?",
    "answer": "targetPort is the port the container is running on, port is the port the service is exposed on in the cluster, and nodePort is the port made avaiable to external consumers of the service."
  },
  {
    "question": "What command will show any limits placed on a deployment?",
    "answer": "`kubectl describe deployment [deployment-name]`"
  },
  {
    "question": "What two commands can be used to create a service from file my.service.yml?",
    "answer": "`kubectl apply -f my.service.yml OR kubectl create -f my.service.yml`"
  },
  {
    "question": "If I have a ConfigMap .yaml with value metadata.name: db-confg, what value in a pod .yaml will link to this ConfigMap?",
    "answer": "spec.spec.env[].valueFrom.configMapKeyRef.key: db-confg  OR  spec.spec.env[].envFrom.configMapRef.name: db-confg | The first command is paired with a specific variable name to load one variable.  The second is used to load all variables from a ConfigMap."
  },
  {
    "question": "What command will show a pod’s .yaml file?",
    "answer": "`kubectl get pod [pod-name] -o yaml`"
  },
  {
    "question": "What .yaml key will ensure a pod does NOT get any traffic for X amount of seconds after deployment?",
    "answer": "minReadySeconds"
  },
  {
    "question": "What command will delete a service created from my.service.yml?",
    "answer": "`kubectl delete -f my.service.yml`"
  },
  {
    "question": "What is needed to allow the docker container to use the docker-socket volume in the following .yaml? | socket.yaml: | apiVersion: v1 | kind: Pod | spec: | volumes: | — name: docker-socket | hostPath: | path: /var/run/docker.socket | type: Socket | containers: | — name: docker | image: docker | command: [\"sleep\"] | args: [\"100000\"] ",
    "answer": "```yaml | volumeMounts: |  - name: docker-socket |    mountPath: /var/run/docker.socket```"
  },
  {
    "question": "What is the acceptable naming convention for port names?",
    "answer": "Port names must only contain lowercase alphanumeric characters and '-'. Port names must also start and end with an alphanumeric character."
  },
  {
    "question": "What is the default binding mode for a StorageClass?",
    "answer": "Immediate.  This means that volume binding and dynamic provisioning occur on creating of the PVC"
  },
  {
    "question": "What command creates a ConfigMap in Kubernetes from a config file?",
    "answer": "`kubectl create configmap [configmap-name] --from-file=[path-to-file]`"
  },
  {
    "question": "What flag controls when Kubernetes pulls an image?",
    "answer": "imagePullPolicy"
  }
]
};
