---
title: Azure Credit Pooling
---

Hosting a Minecraft server is particularly expensive on Azure to be frank. Luckily, me and all my Microsoft friends get $150 a month to use on Azure.

What if we could pool all these credits together to get a really good server...

We also don't need it to be on 24/7, if there was a way the server could shut itself down when nobody has been on it for X minutes that would help. To activate it we could have a discord bot that powers on the VM.

I don't think Azure natively allows the pooling of credits together, go figure the capitalists don't want this to happen

My Idea

1. Write an [ARM Template](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/) to create all the resources
1. Have each party member deploy it from their Azure account
1. Add the IP addresses of each VM to a list somewhere
   - Could have each Minecraft user make a separate entry in their Multiplayer for each server
   - Or, whenever the VM switches, also re-point a domain name
1. Create a storage account that all party members can access
1. Store all the server files in a container on that storage account
1. Every X minutes check what the credit usage or remaining credits on the account is
1. If it is time to switch, show a message in Minecraft the server is rebooting, the new IP address that will host it (in case of DNS issues)
1. Shutdown minecraft server
1. Boot next VM in line (maintain a queue of Azure accounts and their VMs, go in order of which one has more credits)
1. Check every X minutes for player count
1. If zero, then shutdown VM - reactivate through some discord bot that has the ability to boot a VM

[Azure VM Pricing](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/windows/#pricing)
