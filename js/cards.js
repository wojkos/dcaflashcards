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
    "answer": "- Initialize trust metadata for repository|- Delegate singing to the keys in your UCP client bundle|- Configure Notary client"
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
    "answer": "- DTR can be installed on-premises or on a cloid provider|- All nodes have a fixed hostname|- All nodes must be a worker node maaged by Universal Control Playne"
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
    "answer": "//enable autolock|`docker swarm update --autolock=true`|//disable autolock|`docker swarm update --autolock=false`"
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
    "answer": "// for the nginx image|`docker create service --replicas 3 --name nginx-web nginx`"
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
    "answer": "// you need to run this command on the particular node|`docker ps`"
  },
  {
    "question": "What is Docker stack?",
    "answer": "A stack is a group of interrelated services that share dependencies, and can be orchestrated and scaled together."
  },
  {
    "question": "Explain the several commands associated with Docker stack?",
    "answer": "// deploy the new stack or update|`docker stack deploy -c <compose file>`| // list services in the stack|`docker stack services`|// list the tasks in the stack|`docker stack ps`|// remove the stack`docker stack rm`|//List stack|`docker stack ls`"
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
    "answer": "-overlay networks: manage communications among the Docker daemons participating in the swarm.You can attach a service to one or more existing overlay networks as well, to enable service-to-service communication.|-ingress network: is a special overlay network that facilitates load balancing among a service’s nodes. When any swarm node receives a request on a published port, it hands that request off to a module called IPVS. IPVS keeps track of all the IP addresses participating in that service, selects one of them, and routes the request to it, over the ingress network.|-docker_gwbridge: is a bridge network that connects the overlay networks (including the ingress network) to an individual Docker daemon’s physical network."
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
    "answer":"docker network create --driver overlay my-network // you can customize it|docker network create \|--driver overlay \| --subnet 10.0.9.0/24 \| --gateway 10.0.9.99 \| my-network"
  },
  {
    "question": "How to attach a service to an overlay network?",
    "answer":"docker service create \|--replicas 3 \|--name my-web \|--network my-network \|nginx"
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
    "answer":"`docker network rm ingressdocker network create \|--driver overlay \|--ingress \|--subnet=10.11.0.0/16 \|--gateway=10.11.0.2 \|--opt com.docker.network.mtu=1200 \|my-ingress`"
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
    "answer":"docker volume create --driver vieux/sshfs \|-o sshcmd=test@node2:/home/test \|-o password=testpassword \|sshvolume"
  },
  {
    "question": "How to create a service with volume driver?",
    "answer":"docker service create -d \|--name nfs-service \|--mount 'type=volume,source=nfsvolume,target=/app,volume-driver=local,volume-opt=type=nfs,volume-opt=device=:/var/docker-nfs,volume-opt=o=addr=10.0.0.10' \|nginx:latest"
  },
  {
    "question": "If you want to troubleshoot the UCP clusters what is the best method?",
    "answer": "it's always best practice to use client bundle to troubleshoot UCP clusters."
  },
  {
    "question": "What is the general flow when troubleshooting services or clusters?",
    "answer": "`docker service ls`|`docker service ps <service>`|`docker service inspect <service>`|`docker inspect <task>`|`docker inspect <container>`|`docker logs <container>`"
  },
  {
    "question": "How to update metadata about a node?",
    "answer": "you can use labels to add metadata about the node."
  },
  {
    "question": "How to add a label to the node?",
    "answer": "`docker node update --label-add foo worker // add multiple labels`|`docker node update --label-add foo --label-add bar worker`"
  },
  {
    "question": "How to remove the label from the node?",
    "answer": "`docker node update --label-rm foo worker`"
  },
  {
    "question": "How to set up the service to divide tasks evenly over different categories of nodes?",
    "answer": "`--placement-pref // example: if we have three datacenters 3 replicas will be placed on each datacenterdocker service create \--replicas 9 \--name redis_2 \--placement-pref 'spread=node.labels.datacenter' \redis: 3.0.6`"
  },
  {
    "question": "How to limit your service on particular nodes?",
    "answer":"--constraint // example: the following limits tasks for the redis service to nodes where the node type label equals queuedocker service create \|--name redis_2 \|--constraint 'node.labels.type == queue' \|redis: 3.0.6"
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
    "answer": "--env|--mount|--hostname // example|service create --name hosttempl \--hostname=\"{{.Node.Hostname}}-{{.Node.ID}}-{{.Service.Name}}\"\busybox top"
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
    "answer": "Only the instructions RUN, COPY, ADD create layers.Where possible, use multi-stage builds, and only copy the artifacts you need into the final image.sort multi line arguments|RUN apt-get update && apt-get install -y \|bzr \|cvs \|git \|mercurial \|subversion"
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
    "answer": "docker image load // example|`docker image load -i example.tar`"
  },
  {
    "question": "How to modify an image to a single layer?",
    "answer": "// take any multiple layer image|// run the container|docker export <container> > single-layer.tar|docker import /path/to/single-layer.tar|// check the history|docker image history"
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
    "answer": "`export DOCKER_CONTENT_TRUST=1`|`docker push <dtr-domain>/<repository>/<image>:<tag>`"
  },
  {
    "question": "How to pull an image with multiple images?",
    "answer": "-a or --all-tags|`docker pull --all-tags fedora`"
  },
  {
    "question": "How to remove all images which are not used by existing containers?",
    "answer": "`docker image prune -a`"
  },
  {
    "question": "How to limit the scope when pruning images?",
    "answer": "by uisng --filter flag|`docker image prune -a --filter \"until=24h\"`"
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
  }
  ]
};
