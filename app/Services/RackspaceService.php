<?php namespace Gifable\Services;

use OpenCloud\Rackspace;

class RackspaceService {

    public function uploadFile($remoteFileName, $file)
    {
        $client = new Rackspace(Rackspace::US_IDENTITY_ENDPOINT, array(
            'username' => env('RACKSPACE_USERNAME'),
            'apiKey' => env('RACKSPACE_API_KEY')
        ));

        $objectStoreService = $client->objectStoreService(null, env('RACKSPACE_REGION'));

        $container = $objectStoreService->getContainer(env('RACKSPACE_CONTAINER'));

        $fileData = file_get_contents($file);

        $object = $container->uploadObject($remoteFileName, $fileData);

        return $object;
    }

}
